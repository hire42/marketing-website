import { FeaturedProductsGrid, type ProductCard } from '@/components/FeaturedProductsGrid'

const QUERY = `
  query FeaturedProducts {
    productCollection(
      first: 12
      filter: { isActive: { eq: true } }
      orderBy: [{ rating: DescNullsLast }]
    ) {
      edges {
        node {
          id
          name
          mainImageUri
          pricePerDay
          rating
        }
      }
    }
  }
`

function resolveImageUrl(mainImageUri: string | null, supabaseUrl: string): string | null {
  if (!mainImageUri) return null
  if (mainImageUri.startsWith('http')) return mainImageUri
  return `${supabaseUrl}/storage/v1/object/public/product-images/${mainImageUri}`
}

export async function FeaturedProducts() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) return null

  let products: ProductCard[] = []

  try {
    const res = await fetch(`${url}/graphql/v1`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: key },
      body: JSON.stringify({ query: QUERY }),
      next: { revalidate: 3600 },
    })
    if (res.ok) {
      const { data } = await res.json()
      products = (data?.productCollection?.edges ?? []).map(
        (e: { node: { id: string; name: string; mainImageUri: string | null; pricePerDay: number | null; rating: number | null } }) => ({
          id: e.node.id,
          name: e.node.name,
          imageUrl: resolveImageUrl(e.node.mainImageUri, url),
          pricePerDay: e.node.pricePerDay,
          rating: e.node.rating,
        }),
      )
    }
  } catch {
    // silent fail on marketing page
  }

  return <FeaturedProductsGrid products={products} />
}

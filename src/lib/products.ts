// Shared listing access for the marketing site. Both the homepage
// FeaturedProducts grid and the per-listing share page read listings over the
// Supabase GraphQL endpoint with the anon key.

export type ShareProduct = {
  id: string
  name: string
  description: string | null
  mainImageUri: string | null
  pricePerDay: number | null
  isActive: boolean
}

// Rewrites a stored `mainImageUri` (a storage path, or already-absolute URL)
// into a public product-images URL.
export function resolveImageUrl(
  mainImageUri: string | null,
  supabaseUrl: string,
): string | null {
  if (!mainImageUri) return null
  if (mainImageUri.startsWith('http')) return mainImageUri
  return `${supabaseUrl}/storage/v1/object/public/product-images/${mainImageUri}`
}

async function graphql<T>(query: string, variables?: Record<string, unknown>): Promise<T | null> {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) return null
  try {
    const res = await fetch(`${url}/graphql/v1`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: key },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const { data } = await res.json()
    return (data ?? null) as T | null
  } catch {
    return null
  }
}

const PRODUCT_FOR_SHARE_QUERY = `
  query ProductForShare($id: UUID!) {
    productCollection(filter: { id: { eq: $id } }, first: 1) {
      edges { node { id name description mainImageUri pricePerDay isActive } }
    }
  }
`

// Fetches a single listing for the share page. Returns null on any failure
// (missing env, network error, unknown id) so callers can 404.
export async function getProductForShare(id: string): Promise<ShareProduct | null> {
  const data = await graphql<{
    productCollection: { edges: { node: ShareProduct }[] }
  }>(PRODUCT_FOR_SHARE_QUERY, { id })
  return data?.productCollection?.edges?.[0]?.node ?? null
}

const ACTIVE_PRODUCT_IDS_QUERY = `
  query ActiveProductIds {
    productCollection(first: 1000, filter: { isActive: { eq: true } }) {
      edges { node { id } }
    }
  }
`

// Active listing ids for the sitemap. Returns [] on failure.
export async function getActiveProductIds(): Promise<string[]> {
  const data = await graphql<{
    productCollection: { edges: { node: { id: string } }[] }
  }>(ACTIVE_PRODUCT_IDS_QUERY)
  return (data?.productCollection?.edges ?? []).map((e) => e.node.id)
}

import fs from 'fs'
import { NextResponse } from 'next/server'

const content = fs.readFileSync(process.cwd() + '/src/app/lenders.md', 'utf8')

export async function GET() {
  return NextResponse.json(
    {
      version: 1,
      title: "Lenders's Declaration",
      content,
    },
    {
      status: 200,
    },
  )
}

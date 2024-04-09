import fs from 'fs'
import { NextResponse } from 'next/server'

const content = fs.readFileSync(process.cwd() + '/src/app/terms.md', 'utf8')

export async function GET() {
  return NextResponse.json(
    {
      version: 1,
      title: 'Terms and Conditions',
      content,
    },
    {
      status: 200,
    },
  )
}

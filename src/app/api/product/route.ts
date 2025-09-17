import { handleUpload } from '@vercel/blob/client'
import { NextRequest, NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb-connection'
import Product from '@/app/models/product'

export async function POST(req: NextRequest) {
  await connectToDatabase()
  const body = await req.json()

  const response = await handleUpload({
    body,
    request: req,
    onBeforeGenerateToken: async () => ({
      allowedContentTypes: ['image/jpeg', 'image/png'],
      addRandomSuffix: true
    }),
    onUploadCompleted: async ({ blob, tokenPayload }) => {
      if (tokenPayload) {
        await Product.create({
          title: body.title,
          price: body.price,
          productUrl: blob.url,
          description: body.description
        })
      }
    }
  })

  return NextResponse.json(response, { status: 200 })
}

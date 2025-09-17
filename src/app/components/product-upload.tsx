// /app/avatar/upload/page.tsx (Next.js App Router)
'use client'
import { PutBlobResult } from '@vercel/blob'
import { upload } from '@vercel/blob/client'
import { useState, useRef } from 'react'

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [blob, setBlob] = useState<PutBlobResult | null>(null)

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        const file = inputFileRef.current?.files?.[0]
        if (!file) throw new Error('No file selected')

        const newBlob = await upload(file.name, file, {
          access: 'public',
          handleUploadUrl: '/api/product'
        })

        setBlob(newBlob)
      }}
    >
      <input type='file' ref={inputFileRef} required />
      <button type='submit'>Upload</button>
      {blob && (
        <p>
          Uploaded to: <a href={blob.url}>{blob.url}</a>
        </p>
      )}
    </form>
  )
}

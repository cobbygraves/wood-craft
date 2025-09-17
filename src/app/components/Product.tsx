import React from 'react'
import Image from 'next/image'
import { setImageSize } from '@/lib/utils'

interface Props {
  url: string
  alt: string
  name: string
  price: string
}
function Product({ url, alt, name, price }: Props) {
  const { w, h } = setImageSize()
  return (
    <div className='text-left'>
      <Image src={`/${url}`} alt={alt} width={w} height={h} objectFit='cover' />
      <div className='gap-3'>
        <p className='font-bold text-[var(--primary-color)] text-lg text-left'>
          {name}
        </p>
        <div className='font-bold text-[var(--primary-color)] text-2xl text-left'>
          ${price}
        </div>
      </div>
    </div>
  )
}

export default Product

import React from 'react'
import Image from 'next/image'
import { setImageSize } from '@/lib/utils'

interface Props {
  id?: string | number
  url: string
  alt: string
  name: string
  price: string | number
  // optional wrapper class (e.g. `col-span-2 row-span-2`) applied to parent grid cell
  className?: string
  // optional variant for semantics; not strictly required by rendering logic
  variant?: 'large' | 'medium' | 'small'
}

function Product({
  url,
  alt,
  name,
  price,
  className = '',
  variant = 'medium'
}: Props) {
  // keep using setImageSize if you rely on it elsewhere; for grid we prefer Image fill
  const { w, h } = setImageSize?.() ?? { w: 400, h: 300 }

  return (
    // The wrapper should be the grid item; we keep it flexible so BentoGrid can set spans via className
    <div
      className={`relative w-full h-full overflow-hidden bg-gray-50 ${className}`}
    >
      {/* Use Image fill so it fills the grid cell - parent must be position:relative (it is) */}
      <Image
        src={`/${url}`}
        alt={alt}
        fill
        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
        className='object-cover'
        priority={variant === 'large'} // optionally prioritize large tiles
      />
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-left'>
        <p className='font-bold text-white truncate'>{name}</p>
        <div className='text-white text-lg'>${price}</div>
      </div>
    </div>
  )
}

export default Product

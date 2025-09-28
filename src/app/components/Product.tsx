import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id?: string | number
  url: string
  alt: string
  description?: string
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
  description,
  className = '',
  variant = 'medium'
}: Props) {
  return (
    // The wrapper is a card: image on top, caption below. BentoGrid controls the grid spans.
    <div
      className={`flex flex-col h-full w-full bg-white overflow-hidden ${className}`}
    >
      {/* Image area */}
      <div className='relative w-full flex-1 min-h-[6rem] bg-gray-100'>
        <Image
          src={`/${url}`}
          alt={alt}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
          className='object-cover transition-transform duration-300 group-hover:scale-105'
          priority={variant === 'large'}
        />
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-7'></div>
      </div>

      {/* Caption area */}
      <div className='py-2 bg-white text-left px-1'>
        <div className='flex justify-between items-center font-semibold'>
          <h3 className='text-sm text-gray-900'>{name}</h3>
          {price !== undefined && (
            <div className='text-xs text-gray-500 mt-1'>${price}</div>
          )}
        </div>

        {description !== undefined && (
          <p className='text-xs text-gray-500 mt-1'>{description}</p>
        )}
      </div>
    </div>
  )
}

export default Product

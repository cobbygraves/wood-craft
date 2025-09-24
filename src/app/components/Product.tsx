import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      <div className='text-white absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-left'>
        <div className='absolute right-0 bottom-0'>
          <div className=' text-lg'>${price}</div>
          <Link
            href='/shop'
            className='bg-[var(--primary-color)] w-fit text-[var(--background-color)] hover:bg-[var(--secondary-color)] transition duration-300 cursor-pointer text-center py-1 px-3 border-2 border-[var(--primary-color)] hover:border-[var(--secondary-color)] shadow-[0_10px_10px_#00000030] drop-shadow'
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product

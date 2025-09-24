import Link from 'next/link'
import React from 'react'

function TopCategory() {
  const categories = [
    { name: 'Cutting Boards', path: '/shop/cutting-boards' },
    { name: 'Serving Trays', path: '/shop/serving-trays' },
    { name: 'Coasters', path: '/shop/coasters' },
    { name: 'Laddles', path: '/shop/laddles' },
    { name: 'Holders', path: '/shop/holders' },
    { name: 'Spoons', path: '/shop/spoons' },
    { name: 'Bowls', path: '/shop/bowls' }
  ]
  return (
    <div className='overflow-x-scroll sm:overflow-x-hidden whitespace-nowrap pt-[85px] sm:pt-[100px] relative z-10 '>
      {categories.map((category, index) => (
        <Link
          href={category.path}
          key={index}
          className='text-[var(--primary-color)] font-semibold text-lg hover:text-[var(--secondary-color)] transition duration-300 text-nowrap'
        >
          {category.name}
          {index !== categories.length - 1 && <span className='mx-2'>|</span>}
        </Link>
      ))}
    </div>
  )
}

export default TopCategory

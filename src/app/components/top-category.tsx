import React from 'react'

interface Props {
  loadCategory: (type: string) => void
}

function TopCategory({ loadCategory }: Props) {
  const categories = [
    { name: 'All', category: 'all' },
    { name: 'Cutting Boards', category: 'boards' },
    { name: 'Serving Trays', category: 'trays' },
    { name: 'Coasters', category: 'coasters' },
    { name: 'Laddles', category: 'laddles' },
    { name: 'Holders', category: 'holders' },
    { name: 'Spoons', category: 'spoons' },
    { name: 'Bowls', category: 'bowls' }
  ]
  return (
    <div className='overflow-x-scroll sm:overflow-x-hidden whitespace-nowrap pt-[85px] sm:pt-[100px] relative z-10'>
      {categories.map((category, index) => (
        <button
          onClick={() => loadCategory(category.category)}
          key={index}
          className='text-[var(--primary-color)] font-semibold text-lg hover:text-[var(--secondary-color)] transition duration-300 text-nowrap cursor-pointer'
        >
          {category.name}
          {index !== categories.length - 1 && <span className='mx-2'>|</span>}
        </button>
      ))}
    </div>
  )
}

export default TopCategory

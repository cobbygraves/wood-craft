import React from 'react'

interface Item {
  id?: number
  name: string
  price?: string
  image: string
  description: string
}

const MinimalGoods = ({ items }: { items: Item[] }) => {
  // Define repeating patterns for each row of 3
  const patterns = [
    ['md:row-span-3', 'md:row-span-2', 'md:row-span-1'], // Row 1: tall, medium, short
    ['md:row-span-1', 'md:row-span-3', 'md:row-span-2'], // Row 2: short, tall, medium
    ['md:row-span-2', 'md:row-span-1', 'md:row-span-3'] // Row 3: medium, short, tall
  ]

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[150px]'>
        {items.map((item, index) => {
          const row = Math.floor(index / 3) // which row we're on
          const col = index % 3 // position in the row
          const pattern = patterns[row % patterns.length][col] // pick pattern

          return (
            <div
              key={item.id || index}
              className={`flex flex-col overflow-hidden rounded-2xl shadow hover:shadow-lg transition ${pattern}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-full object-cover'
              />
              <div className='p-4 bg-white'>
                <h3 className='font-semibold text-lg'>{item.name}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MinimalGoods

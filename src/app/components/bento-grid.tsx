import React from 'react'
import Product from './Product'

interface ProductModel {
  image: string
  name: string
  description: string
  price: string | number
}

interface Props {
  products: ProductModel[]
  // number of columns on large screens (default 4)
  columns?: number
}

/*
  Simple pattern-driven bento grid:
  - Uses Tailwind CSS grid with manual col/row spans for items by index.
  - Pattern repeats as needed.
  - Adjust the pattern to taste (bigger items first, etc).
*/
export default function BentoGrid({ products, columns = 4 }: Props) {
  // Pattern of {col,row} spans for the repeating bento layout.
  // Tailwind classes like `col-span-2 row-span-2`
  const pattern = [
    { c: 2, r: 2 }, // large
    { c: 1, r: 1 }, // small
    { c: 1, r: 1 }, // small

    { c: 1, r: 2 }, // tall
    { c: 1, r: 1 }, // small

    { c: 1, r: 2 }, // tall
    { c: 1, r: 1 }, // small
    { c: 1, r: 1 }, // small
    { c: 1, r: 1 } // small
  ]

  const getSpanClass = (index: number) => {
    const p = pattern[index % pattern.length]
    const col = Math.max(1, Math.min(columns, p.c))
    const row = Math.max(1, p.r)
    return `col-span-${col} row-span-${row}`
  }

  // grid-auto-rows determines the base height; increase for a taller card look.
  // Keep responsive columns; parent can override columns prop.
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[20rem]`}>
      {products.map((p, i) => {
        // guard missing url or id
        if (!p || !p.image) return null
        const span = getSpanClass(i)
        // grid item must be the container with the span class
        return (
          <div key={p.image + i} className={`${span} w-full h-full`}>
            {/* product receives no span class; its wrapper inside uses position:relative and fills */}
            <Product
              id={i}
              url={p.image}
              alt={p.name ?? p.name}
              name={p.name}
              description={p.description}
              price={p.price}
              // Optional: tell Product about size preference via variant
              variant={
                pattern[i % pattern.length].c >= 2 &&
                pattern[i % pattern.length].r >= 2
                  ? 'large'
                  : 'small'
              }
            />
          </div>
        )
      })}
    </div>
  )
}

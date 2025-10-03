import React from 'react'
import Product from './Product'
import { Product as IProduct } from '../models/interfaces'

interface Props {
  products: IProduct[]
  handleClick: (id: string | number | undefined) => void
  columns?: number
}

export default function BentoGrid({
  products,
  columns = 4,
  handleClick
}: Props) {
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

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[20rem]`}>
      {products.map((p, i) => {
        if (!p || !p.image) return null
        const span = getSpanClass(i)

        return (
          <div key={p.image + i} className={`${span} w-full h-full`}>
            <Product
              id={p.id}
              url={p.image}
              alt={p.name ?? p.name}
              name={p.name}
              description={p.description}
              handleClick={handleClick}
              price={p.price}
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

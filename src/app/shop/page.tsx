'use client'
import { useState } from 'react'
import TopCategory from '../components/top-category'
import { productsData } from '@/lib/data'
import BentoGrid from '../components/bento-grid'
import { Product } from '../models/interfaces'

export const Shop = () => {
  const [items, setItems] = useState<Product[]>(productsData)
  const handleCategoryLoading = async (type: string) => {
    if (type === 'all') {
      setItems(productsData)
      return
    }
    const filteredProducts = productsData.filter(
      (item) => item.category === type
    )
    setItems(filteredProducts)
  }

  return (
    <div className='text-[var(--secondary-color)] text-center px-5'>
      <TopCategory loadCategory={handleCategoryLoading} />

      <div className='flex flex-wrap'>
        <main className='container mx-auto py-8'>
          <BentoGrid products={items} />
        </main>
      </div>
    </div>
  )
}

export default Shop

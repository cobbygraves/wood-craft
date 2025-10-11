'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { productsData } from '@/lib/data'
import BentoGrid from '@/app/components/bento-grid'
import { Product } from '@/app/models/interfaces'
import { useParams, useRouter } from 'next/navigation'
import { UserFormDialog } from '@/app/components/user-form-dialog'

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null)
  const params = useParams()
  const router = useRouter()
  const id = String(params?.id ?? '')
  // productsData uses numeric ids — compare as strings for safety

  const suggestedItems = productsData
    .filter((item) => item.category === product?.category)
    .filter((item) => item.id !== Number(id))

  const handleSuggestion = (newId: string | number | undefined) => {
    if (!newId) return
    // navigate to the product route with the clicked item's id
    router.push(`/product/${newId}`)
  }

  useEffect(() => {
    const selectedProduct = productsData.find((item) => String(item.id) === id)
    setProduct(selectedProduct ?? null)
  }, [id])
  return (
    <div className='mt-[100px] sm:mt-[150px] text-2xl px-5 mb-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-20 sm:gap-x-5'>
        <div>
          <div className='relative w-full sm:w-[90%] h-[70vh] sm:h-[50vh] xl:h-[70vh]'>
            <Image
              src={`/${product?.image}`}
              alt='product-image'
              fill
              // sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
              className='object-cover transition-transform duration-300 group-hover:scale-105'
              priority={true}
            />
          </div>
        </div>

        <div className='flex items-center'>
          <div className=' space-y-4.5'>
            <p className='text-4xl sm:text-7xl mb-4 font-extrabold text-[var(--primary-color)] mt-5 sm:mt-0'>
              {product?.name}
            </p>
            <p className='text-xl font-semibold'>${product?.price}</p>
            <p className='w-full sm:w-3/4'>{product?.description}</p>
            {/* <button className='bg-[var(--primary-color)] text-white py-2 px-4 hover:bg-[var(--secondary-color)] cursor-pointer text-xl'>
              Request Quote
            </button> */}
            <UserFormDialog
              productName={product?.name}
              image={product?.image}
            />
          </div>
        </div>
      </div>
      <hr className='border border-[var(--secondary-color)] mt-10' />
      <div className='flex flex-wrap'>
        <p className='text-2xl font-semibold text-[var(--primary-color)] mt-7'>
          Suggested Items
        </p>
        <main className='container py-7'>
          <BentoGrid products={suggestedItems} handleClick={handleSuggestion} />
        </main>
      </div>
    </div>
  )
}

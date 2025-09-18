import TopCategory from '../components/top-category'
import { productsData } from '@/lib/data'
// import Product from '../components/Product'
import BentoGrid from '../components/bento-grid'

export const Shop = () => {
  return (
    <div className='text-[var(--secondary-color)] text-center px-5'>
      <TopCategory />

      <div className='flex gap-7 flex-wrap'>
        <main className='container mx-auto py-8'>
          <BentoGrid products={productsData} columns={4} gap={4} />
        </main>
      </div>
    </div>
  )
}

export default Shop

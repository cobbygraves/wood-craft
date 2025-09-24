import TopCategory from '../components/top-category'
import { productsData } from '@/lib/data'
// import Product from '../components/Product'
import BentoGrid from '../components/bento-grid'
// import MinimalGoods from '../components/minimal-goods'

export const Shop = () => {
  return (
    <div className='text-[var(--secondary-color)] text-center px-5'>
      <TopCategory />

      <div className='flex flex-wrap'>
        <main className='container mx-auto py-8'>
          <BentoGrid products={productsData} />
          {/* <MinimalGoods items={productsData} /> */}
        </main>
      </div>
    </div>
  )
}

export default Shop

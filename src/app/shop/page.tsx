import TopCategory from '../components/top-category'
import { productsData } from '@/lib/data'
import Product from '../components/Product'

export const Shop = () => {
  return (
    <div className='text-[var(--secondary-color)] text-center px-5'>
      <TopCategory />

      <div className='flex gap-7 sm:px-[7rem] flex-wrap'>
        {productsData.map((product, index) => (
          <Product
            key={index}
            url={product.image}
            alt={product.name}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Shop

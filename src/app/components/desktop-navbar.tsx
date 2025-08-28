import { LuShoppingCart } from 'react-icons/lu'
import Link from 'next/link'

function DesktopNavbar() {
  return (
    <div className='px-5 lg:flex items-center justify-between fixed top-0 left-0 right-0 z-20 hidden'>
      <ul className='px-5 text-lg flex gap-x-5 items-center font-bold'>
        <li>
          <Link href='/'>HOME</Link>
        </li>
        <li>
          <Link href='shop'>SHOP</Link>
        </li>
        <li>
          <a href='#'>SERVICES</a>
        </li>
        <li>
          <a href='#'>ABOUT</a>
        </li>
      </ul>

      <div className='top-[0.5rem]'>
        <img src='3x3.webp' alt='KCrafts Logo' className='h-13 w-13' />
      </div>

      <div className='flex items-center gap-x-2 py-5 justify-between'>
        <a className='bg-[var(--primary-color)] text-[var(--background-color)] rounded-3xl hover:bg-[var(--secondary-color)] transition duration-300 cursor-pointer text-center py-1 px-3 w-full border-2 border-[var(--primary-color)] hover:border-[var(--secondary-color)] drop-shadow-xl'>
          EXPLORE THE SHOP HERE
        </a>
        <div className='flex items-center gap-x-3'>
          <div className='flex items-center gap-x-1'>
            <a href='#'>
              {/* <i
                className='pi pi-shopping-cart text-xl'
                style={{ fontSize: '1.7rem' }}
              ></i> */}
              <LuShoppingCart size='1.7rem' />
            </a>
            <span className='relative bottom-1.5'>2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavbar

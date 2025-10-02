'use client'
import { LuShoppingCart } from 'react-icons/lu'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function DesktopNavbar() {
  const pathname = usePathname() || '/'

  return (
    <div className=' lg:flex items-center justify-between fixed top-0 left-0 right-0 z-20 hidden bg-white px-5 h-[100px]'>
      <ul className='text-lg flex gap-x-5 items-center font-bold'>
        <li className={` ${pathname === '/' ? 'underline' : ''}`}>
          <Link href='/'>HOME</Link>
        </li>
        <li className={`${pathname.startsWith('/shop') ? 'underline' : ''}`}>
          <Link href='/shop'>SHOP</Link>
        </li>
        <li>
          <a href='#'>SERVICES</a>
        </li>
        <li>
          <a href='#'>ABOUT</a>
        </li>
      </ul>

      <Image src={'/logo.png'} alt='Tuak Wood Logo' width={75} height={75} />

      <div className='flex items-center gap-x-2 justify-between'>
        {/* <a className='bg-[var(--primary-color)] text-[var(--background-color)] hover:bg-[var(--secondary-color)] transition duration-300 cursor-pointer text-center py-1 px-3 w-full border-2 border-[var(--primary-color)] hover:border-[var(--secondary-color)] shadow-[0_10px_10px_#00000030] drop-shadow'>
          EXPLORE THE SHOP HERE
        </a> */}
        <div className='flex gap-2 items-center border-1 border-[var(--primary-color)] w-[300px]'>
          <input
            type='text'
            placeholder='Search for products'
            className='w-full py-1 px-3 text-[1.2rem] focus:outline-none'
          />
          <button className='bg-[var(--primary-color)] text-[var(--background-color)] hover:bg-[var(--secondary-color)] transition duration-300 cursor-pointer text-center py-2 px-3'>
            <CiSearch className='relative  text-3xl' />
          </button>
        </div>

        <div className='flex items-center gap-x-3'>
          <div className='flex items-center gap-x-1'>
            <a href='#'>
              {/* <i
                className='pi pi-shopping-cart text-xl'
                style={{ fontSize: '1.7rem' }}
              ></i> */}
              <LuShoppingCart size='2rem' />
            </a>
            <span className='relative bottom-1.5'>2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavbar

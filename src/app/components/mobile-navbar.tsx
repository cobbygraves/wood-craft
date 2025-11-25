'use client'
import { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { FaPhoneVolume } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'
import Image from 'next/image'
import { LuShoppingCart } from 'react-icons/lu'

export const MobilieNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const pathname = usePathname() || '/'
  const searchProduct = () => {
    console.log('navigating to product search page')
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div
      className={` ${
        showMenu &&
        'h-screen overflow-hidden  text-[var(--primary-color)] absolute z-20 w-full lg:hidden'
      }`}
    >
      <div
        className={`text-[var(--primary-color)] px-5 h-[75px] flex items-center justify-between fixed top-0 left-0 right-0 z-20 lg:hidden ${
          showMenu && 'text-[var(--primary-color)]'
        } bg-white`}
      >
        <Link href='/'>
          <Image
            className=''
            src={'/logo.png'}
            alt='Tuak Wood Logo'
            width={50}
            height={50}
          />
        </Link>
        <div className='flex items-center gap-3 justify-between'>
          <div className='flex justify-end items-center'>
            {pathname === '/shop' && (
              <div className='flex gap-x-2 items-center border-1 border-[var(--primary-color)] w-[80%]'>
                <input
                  type='text'
                  placeholder='Search for products'
                  className='w-full px-3 text-[1.2rem] focus:outline-none'
                />
                <button className='bg-[var(--primary-color)] text-[var(--background-color)] hover:bg-[var(--secondary-color)] transition duration-300 cursor-pointer text-center py-1 px-2'>
                  <CiSearch className='relative  text-3xl' />
                </button>
              </div>
            )}
          </div>

          <CiMenuBurger size={30} />
        </div>
      </div>
    </div>
  )
}

export default MobilieNavbar

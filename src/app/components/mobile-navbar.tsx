'use client'
import { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

export const MobilieNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)
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
        'h-screen overflow-hidden  text-[var(--primary-color)] absolute z-50 w-full md:hidden'
      }`}
    >
      <div
        className={`text-[var(--primary-color)] px-5 h-[75px] flex items-center justify-between fixed top-0 left-0 right-0 z-20 md:hidden ${
          showMenu && 'text-[var(--primary-color)]'
        }`}
      >
        <Link href='/'>
          <img src='3x3.webp' alt='KCrafts Logo' className='h-13 w-13' />
        </Link>

        {showMenu ? (
          <AiOutlineClose onClick={toggleMenu} className='h-10 w-10' />
        ) : (
          <CiMenuBurger className='h-10 w-10' onClick={toggleMenu} />
        )}
      </div>
    </div>
  )
}

export default MobilieNavbar

'use client'
import { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

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
        'h-screen overflow-hidden  text-[var(--primary-color)] absolute z-20 w-full lg:hidden'
      }`}
    >
      <div
        className={`text-[var(--primary-color)] px-5 h-[75px] flex items-center justify-between fixed top-0 left-0 right-0 z-20 lg:hidden ${
          showMenu && 'text-[var(--primary-color)]'
        } bg-white`}
      >
        <Link href='/'>
          {/* <img src='logo.png' alt='KCrafts Logo' className='h-20 w-20' /> */}
          <Image
            className=''
            src={'/logo.png'}
            alt='Tuak Wood Logo'
            width={50}
            height={50}
          />
        </Link>

        {showMenu ? (
          <AiOutlineClose onClick={toggleMenu} className='h-7 w-7' />
        ) : (
          <CiMenuBurger className='h-7 w-7' onClick={toggleMenu} />
        )}
      </div>
    </div>
  )
}

export default MobilieNavbar

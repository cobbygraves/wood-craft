'use client'

import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import card1 from '../../../public/card1.svg'
import card2 from '../../../public/card2.svg'
import card3 from '../../../public/card3.svg'
import card4 from '../../../public/card4.svg'
import Carousel from './carousel'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'

export default function HomeBanner() {
  const [active, setActive] = useState(0)
  const year = new Date().getFullYear()

  const imagesItems = [
    <Image key={0} className='h-full w-full' src={card1} alt='teste' />,
    <Image key={1} className='h-full w-full' src={card2} alt='teste' />,
    <Image key={2} className='h-full w-full' src={card3} alt='teste' />,
    <Image key={3} className='h-full w-full' src={card4} alt='teste' />,
    <Image key={4} className='h-full w-full' src={card1} alt='teste' />
  ]

  const handleActiveMsg = (index: number) => {
    setActive(index)
  }

  const messages = [
    '  Handcrafted with Love, Delivered right with you.',

    '  Unique Creations for Every Occass for Delivered.',

    '  Discover the Art of Handmade Excel top Delivered.',

    ' From Our Hands to Your Home, with every Creations.',

    ' Handcrafted Treas, Made Just the name Hands to you.'
  ]

  return (
    <div className='w-[85%] lg:w-full flex flex-col items-center justify-center sm:justify-start mt-0 sm:mt-[13rem] relative bottom-24 h-full'>
      <div className=' mb-5 px-5 flex font-extralight text-xl sm:text-[1.7rem] text-center sm:w-2/3 xl:w-1/2'>
        {messages[active].toUpperCase()}
      </div>
      <Carousel items={imagesItems} setMessage={handleActiveMsg} />

      <div className='flex justify-center gap-2 items-center mt-12 w-full'>
        <Link
          href='/shop'
          className='bg-[var(--primary-color)] w-fit text-[var(--background-color)] hover:bg-[var(--secondary-color)] transition duration-300 cursor-pointer text-center py-1 px-3 border-2 border-[var(--primary-color)] hover:border-[var(--secondary-color)] shadow-[0_10px_10px_#00000030] drop-shadow'
        >
          Explore The Shop Here!
        </Link>
        <Link
          href='/about'
          className='bg-[var(--primary-color)] w-fit text-[var(--background-color)] hover:bg-[var(--secondary-color)] transition duration-300 cursor-pointer text-center py-1 px-3 border-2 border-[var(--primary-color)] hover:border-[var(--secondary-color)] shadow-[0_10px_10px_#00000030] drop-shadow'
        >
          About Us
        </Link>
      </div>

      <div className='flex items-center gap-x-3 mt-5 justify-center text-[var(--primary-color)]'>
        <a href='#'>
          <FaFacebookF size={25} />
        </a>
        <a href='#'>
          <FaInstagram size={25} />
        </a>
        <a href='#'>
          <FaTiktok size={25} />
        </a>
      </div>
      {/* Todo */}
      <small className='text-[var(--primary-color)] mt-3 text-xl font-semibold text-center'>
        Handmade wooden items with zero dyes or stains
      </small>
    </div>
  )
}

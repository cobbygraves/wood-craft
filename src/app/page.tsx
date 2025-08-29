'use client'
import { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import Carousel from './components/carousel'
import card1 from '../../public/card1.svg'
import card2 from '../../public/card2.svg'
import card3 from '../../public/card3.svg'
import card4 from '../../public/card4.svg'
import Image from 'next/image'
import Welcome from './components/welcome'
import Link from 'next/link'

export default function Home() {
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
    '  Handcrafted with Love, Delivered right with stress.',

    '  Unique Creations for Every Occass for Delivered again.',

    '  Discover the Art of Handmade Excel top Delivered right.',

    ' From Our Hands to Your Home, with every Creations for.',

    ' Handcrafted Treas, Made Just the name Hands to you.'
  ]
  return (
    <>
      <Welcome />
      <div className='banner min-w-full h-screen overflow-hidden flex flex-col'>
        <div className='flex justify-center h-full'>
          <div className='w-[85%] lg:w-full flex flex-col items-center justify-end relative bottom-24 h-full'>
            <div className=' mb-5 px-5 flex font-extralight text-3xl sm:text-4xl text-center sm:w-2/3 xl:w-1/2'>
              {messages[active].toUpperCase()}
            </div>
            <Carousel items={imagesItems} setMessage={handleActiveMsg} />

            <div className='flex items-center gap-x-3 mt-12 justify-center text-[var(--primary-color)]'>
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
            <Link
              href='/shop'
              className=' mt-10 lg:hidden bg-[var(--primary-color)] text-[var(--background-color)] hover:bg-[var(--secondary-color)] transition duration-300 cursor-pointer text-center p-3 w-fit border-2 border-[var(--primary-color)] hover:border-[var(--secondary-color)]'
            >
              Explore The Shop Here!
            </Link>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 bg-[var(--primary-color)] h-16 flex items-center justify-center'>
          <p className='text-center text-white font-light'>
            &copy; {year} - KCrafts. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  )
}

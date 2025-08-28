'use client'
import { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import Carousel from './components/Carousel/Carousel'
import card1 from '../../public/card1.svg'
import card2 from '../../public/card2.svg'
import card3 from '../../public/card3.svg'
import card4 from '../../public/card4.svg'
import Image from 'next/image'

export default function Home() {
  const [active, setActive] = useState(0)
  const year = new Date().getFullYear()

  // const bgImages = [
  //   'url(../../card1.svg)',
  //   'url(../../card2.svg)',
  //   'url(../../card3.svg)',
  //   'url(../../card4.svg)',
  //   'url(../../card1.svg)'
  // ]

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
    <p key={0} className=' font-semibold text-4xl text-center sm:w-1/2'>
      Handcrafted with Love, Delivered.
    </p>,
    <p key={1} className='font-semibold text-4xl text-center sm:w-1/2'>
      Unique Creations for Every Occass.
    </p>,
    <p key={2} className='font-semibold text-4xl text-center sm:w-1/2'>
      Discover the Art of Handmade Exce.
    </p>,
    <p key={3} className='font-semibold text-4xl text-center sm:w-1/2'>
      From Our Hands to Your Home, with.
    </p>,
    <p key={4} className='font-semibold text-4xl text-center sm:w-1/2'>
      Handcrafted Treasures, Made Just.
    </p>
  ]
  return (
    <div
      className='banner min-w-full h-screen overflow-hidden flex flex-col pt-[185px]'
      // style={{ backgroundImage: bgImages[active] }}
    >
      <div className=' mb-10 px-7 flex justify-center font-bold'>
        {messages[active]}
      </div>

      <div className='flex justify-center'>
        <div className='w-[85%] lg:w-full flex flex-col items-center justify-center'>
          <Carousel items={imagesItems} setMessage={handleActiveMsg} />

          <div className='flex items-center gap-x-3 mt-16 justify-center text-[var(--primary-color)]'>
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
          <a className=' mt-10 lg:hidden bg-[var(--primary-color)] text-[var(--background-color)] rounded-3xl hover:bg-[var(--secondary-color)] transition duration-300 cursor-pointer text-center p-3 w-fit border-2 border-[var(--primary-color)] hover:border-[var(--secondary-color)]'>
            Explore The Shop Here!
          </a>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 bg-[var(--primary-color)] h-16 flex items-center justify-center'>
        <p className='text-center text-white font-light'>
          &copy; {year} - KCrafts. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

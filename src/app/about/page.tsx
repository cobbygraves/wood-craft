import * as React from 'react'

import { CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { portfolioData } from '@/lib/data'
import Image from 'next/image'

export default function About() {
  const year = new Date().getFullYear()
  return (
    <div className='w-full mt-[100px] lg:mt-[150px]'>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-7 px-[1.3rem] mb-[50px]'>
        <div className='relative h-64 lg:h-auto'>
          <Image
            src='/about-author.png'
            alt='author.jpg'
            fill
            sizes='(max-width: 1024px) 100vw, 50vw'
            className='object-cover'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-center lg:text-left text-4xl font-extralight mb-5'>
            About The Maker
          </h1>
          <p className='font-light leading-loose text-xl text-justify'>
            My name is Kweku Ampiah Amoah, and I&apos;m the hands and heart behind
            Tuak Woodlab. By profession, I&apos;m a biomedical scientist with a
            degree in Medical Laboratory Science—but outside the lab, I&apos;m deeply
            passionate about the art of woodworking. I began my journey in 2022,
            drawn by the natural beauty of wood and a lifelong fascination with
            the elegance of antiques. What started with just a few hand tools
            has grown into a fully equipped workshop, allowing me to bring more
            precision, creativity, and uniqueness to every piece. At Tuak
            Woodlab, I bring the same accuracy and dedication from my science
            background into my woodworking practice. Each project is approached
            with care and craftsmanship, often taking days to refine so it
            perfectly aligns with the client&apos;s vision. Now a branded workshop,
            Tuak Woodlab continues to evolve—exploring new techniques,
            materials, and designs to produce furniture and woodcrafts that are
            not only beautiful but strikingly original. Every piece is built to
            last, made to reflect your story, and crafted to stand out.
          </p>
        </div>
      </section>
      <p className='font-extralight text-center text-4xl mt-10 mb-5'>
        Portfolio
      </p>
      <Carousel
        opts={{
          align: 'start'
        }}
        className='w-full mb-7'
      >
        <CarouselContent className='ml-0'>
          {portfolioData.map((item, index) => (
            <CarouselItem
              key={item.id}
              className={`md:basis-1/2 lg:basis-1/3 xl:basis-1/4 ${
                index > 0 ? 'pl-2' : ''
              } ${index < portfolioData.length - 1 ? 'pr-2' : ''}`}
            >
              <CardContent className='flex aspect-square items-center justify-center p-6 relative'>
                <Image
                  src={`/${item.image}`}
                  alt={item.image}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  className='object-cover'
                />
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-7 w-12 h-12' />
        <CarouselNext className='right-7 w-12 h-12' />
      </Carousel>
      <div className='bg-[var(--primary-color)] h-16 flex items-center justify-center z-10'>
        <p className='text-center text-white font-light'>
          &copy; {year} - T&uacute;ak WoodLab. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
'use client'
import React, { useState, useEffect } from 'react'
import CarouselItem from './carousel-item'
import CarouselIndicator from './carousel-indicator'
// import { IoIosArrowBack } from 'react-icons/io'

export interface CarouselProps {
  width?: number
  height?: number
  items: React.ReactNode[]
  setMessage: (active: number) => void
}

export default function Carousel({ items, setMessage }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(2)
  const [visibleDistance, setVisibleDistance] = useState<number>(2)

  // Track viewport width to change how many neighbors are visible on mobile
  useEffect(() => {
    function update() {
      if (typeof window === 'undefined') return
      setVisibleDistance(window.innerWidth <= 640 ? 1 : 2)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [items.length])

  useEffect(() => {
    setMessage(activeIndex)
  }, [activeIndex, setMessage])

  return (
    <div className='carousel-container'>
      {items?.map((item, index) => (
        <CarouselItem
          key={index}
          index={index}
          activeIndex={activeIndex}
          totalItems={items.length}
          visibleDistance={visibleDistance}
        >
          {item}
        </CarouselItem>
      ))}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex)
        }}
      />
    </div>
  )
}

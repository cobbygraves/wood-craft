import React from 'react'

export interface CardProps {
  index: number
  activeIndex: number
  totalItems: number
  visibleDistance?: number
  children?: React.ReactNode
}

export default function CarouselItem({
  index,
  activeIndex,
  totalItems,
  visibleDistance = 2,
  children
}: CardProps) {
  // Calculate circular offset to maintain equal items on both sides
  let diff = index - activeIndex

  // Adjust for circular positioning (wrap-around)
  if (diff > totalItems / 2) diff -= totalItems
  if (diff < -totalItems / 2) diff += totalItems

  const offset = diff / 4
  const direction = Math.sign(diff)
  const absOffset = Math.abs(offset)

  // Make active and immediate neighbors use the same horizontal scale so their visible widths match
  const widthScale = Math.abs(diff) <= 1 ? 0.9 : 1

  // Slightly increase horizontal offset for immediate neighbors so their reduced width doesn't overlap the active card
  const neighborNudge = Math.abs(diff) === 1 ? 1.06 : 1

  const cssTransformProperties = `
    rotateY(calc(${offset} * 55deg))
    /* keep vertical scale consistent to avoid perceived size differences */
    scaleY(1)
    translateX(calc( ${direction} * -3.5rem * ${neighborNudge}))
    translateZ(calc( ${absOffset} * -35rem))
    scaleX(${widthScale})
   `

  // Use the circular diff for opacity/display so wrap-around works properly
  // visibleDistance controls how many neighbors on each side are visible
  const visible = Math.abs(diff) <= visibleDistance

  return (
    <div
      className='carousel-item'
      style={{
        transform: cssTransformProperties,
        transformOrigin: 'center center',
        transition:
          'transform 420ms cubic-bezier(.22,.9,.3,1), opacity 320ms ease',
        opacity: visible ? '1' : '0',
        display: visible ? 'block' : 'none',
        // higher zIndex for items closer to the active index
        zIndex: `${100 - Math.abs(diff)}`
      }}
    >
      {children}
    </div>
  )
}

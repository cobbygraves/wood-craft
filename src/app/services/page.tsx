import React from 'react'
import { servicesData } from '@/lib/data'
// import ServiceCard from '../components/service-card'
export default function Services() {
  return (
   <div>

      {/* SECTION 1: HERO BANNER 
        This uses a relative container with an absolute-positioned overlay 
        to match your first screenshot.
      */}
      <div 
        className="relative w-full h-[300px] md:h-[450px] bg-cover bg-center mt-[85px] sm:mt-[100px] px-5"
        // You MUST replace this with your path to the main wood slab image
        style={{ backgroundImage: "url('services-banner.jpg')" }}
      >
        {/* Container for the left-side panels */}
        <div className="absolute left-0 top-0 h-full flex">
          
          {/* Panel 1: Vertical wood grain with text */}
          <div 
            className="w-[150px] md:w-[250px] h-full bg-cover bg-center p-6 md:p-8 flex items-start"
            // You MUST replace this with your path to the vertical wood grain image
            style={{ backgroundImage: "url('/images/your-vertical-wood-image.jpg')" }}
          >
            <h1 className="text-white text-3xl md:text-5xl font-semibold">
              Our Services
            </h1>
          </div>
        </div>
      </div>

      {/* SECTION 2 & 3: MAIN CONTENT AREA
        This contains the subheading and the service items on the 
        light beige/gray background.
      */}
      <div className="w-full bg-stone-200 p-8 md:p-16 lg:p-24">
        
        {/* Subheading: "What we offer" */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl">
            What we offer
          </h2>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          
          {/* Service 1: Custom Heirloom Furniture */}
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-4">
              {servicesData[0].title}
            </h3>
            <p className="text-lg text-zinc-700 leading-relaxed max-w-md mx-auto">
              {servicesData[0].description}
            </p>
          </div>

          {/* Service 2: Kitchen Accessories */}
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-4">
              {servicesData[1].title}
            </h3>
            <p className="text-lg text-zinc-700 leading-relaxed max-w-md mx-auto">
              {servicesData[1].description}
            </p>
          </div>

          {/* Service 3: Custom Epoxy Woodcraft
            We use `md:col-span-2` to make this item span the
            full width of the grid on medium screens and up.
          */}
          <div className="text-center md:col-span-2 pt-8"> 
            <h3 className="text-3xl font-semibold mb-4">
              {servicesData[2].title}
            </h3>
            <p className="text-lg text-zinc-700 leading-relaxed max-w-md mx-auto">
              {servicesData[2].description}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { servicesData } from '@/lib/data'
// import ServiceCard from '../components/service-card'
export default function Services() {
  return (
    <div>
      <div
        className='relative w-full h-[300px] md:h-[450px] bg-cover bg-center mt-[85px] sm:mt-[100px] px-5'
        // You MUST replace this with your path to the main wood slab image
        style={{ backgroundImage: "url('services-banner.jpg')" }}
      >
      
        {/* <div className='absolute left-0 top-0 h-full flex'>
        
          <div className='w-[150px] md:w-[250px] h-full bg-cover bg-center p-6 md:p-8 flex items-start'>
            <h1 className='text-white text-3xl md:text-5xl font-semibold'>
              Our Services
            </h1>
          </div>
        </div> */}
      </div>

      <div className='w-full  p-16'>
        {/* Subheading: "What we offer" */}
        <div className='text-center mb-16 md:mb-20'>
          <h2 className='text-4xl md:text-5xl text-[var(--primary-color)]'>Here&apos;s how we help you!</h2>
        </div>

        {/* Services Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6'>
          

          {
            servicesData.map(serviceData=> <div key={serviceData.title}>
            <h3 className='text-3xl font-semibold mb-4 text-center text-[var(--primary-color)]'>
              {serviceData.title}
            </h3>
            <p className='text-lg text-[var(--secondary-color)] leading-relaxed max-w-md mx-auto'>
              {serviceData.description}
            </p>
          </div>)
          }
          
        </div>
      </div>
    </div>
  )
}

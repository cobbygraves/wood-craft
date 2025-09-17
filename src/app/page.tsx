import HomeBanner from './components/home-banner'

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <>
      <div className='banner min-w-full h-screen overflow-hidden flex flex-col'>
        <div className='flex justify-center h-full'>
          <HomeBanner />
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

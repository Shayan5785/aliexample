import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 py-4'>
      {/* first div */}
      <div className='order-last ml-4 md:ml-20  flex flex-col justify-center'>
        <h1 className='font-bold text-[48px]'>Hi! I am <span className='font-shadowsIntoLight text-amber-500 text-[64px]'>Shayan</span></h1>
        <p className='text-[24px]'>I am a frontend web developer</p>
        <div>
          <button className='text-amber-500 bg-yellow-100 py-3 px-6 text-[20px] hover:text-amber-500 border border-yellow-100 hover:border-amber-500 hover:bg-transparent duration-200 mt-6'>Hire Me</button>
        </div>
      </div>

      {/* second div */}
      <div className='md:order-last'>
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
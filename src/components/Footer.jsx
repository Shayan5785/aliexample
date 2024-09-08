import { FacebookIcon, Github, Instagram, MailIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-yellow-100 md:flex justify-center gap-16 items-center py-8 px-8 md:px-0'>
      <p className='font-shadowsIntoLight text-amber-500 text-[64px] mb-8 md:mb-0'>Shayan Affandi</p>
      <div className='text-amber-500 font-medium'>
        <div className='flex gap-3 items-center mb-5 '>
          <MailIcon color='#f59e0b' size={30} />
          <p>shayanaffandi5785@gmail.com</p>
        </div>
        <div className='flex gap-3 items-center mb-5 '>
          <Instagram color='#f59e0b' size={30} />
          <p>Shanmek5785</p>
        </div>
        <div className='flex gap-3 items-center '>
          <Github color='#f59e0b' size={30} />
          <p>Shanmek5785</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
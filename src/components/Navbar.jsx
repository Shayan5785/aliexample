import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Navbar = () => {  
  return (
    <div className="bg-yellow-100">
      <div className='md:flex items-center justify-between py-4 px-8'>
        <p className='uppercase text-[30px] font-bold tracking-widest text-amber-500 font-shadowsIntoLight text-center'>Shayan</p>
        <ul className='flex justify-center gap-4'>
          <li className='text-[18px] text-amber-500 hover:text-orange-700 cursor-pointer'>Products</li>
          <li className='text-[18px] text-amber-500 hover:text-orange-700 cursor-pointer'>About</li>
          <li className='text-[18px] text-amber-500 hover:text-orange-700 cursor-pointer'>Blog</li>
          <li className='text-[18px] text-amber-500 hover:text-orange-700 cursor-pointer'>Contacts</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
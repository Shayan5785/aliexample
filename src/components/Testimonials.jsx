import React from 'react'

const Testimonials = () => {
    return (
        <div className='border-4 border-amber-500 px-6 py-4 w-[400px] flex items-center gap-4'>
            <img className='w-28 h-28 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEM7h-3_xucDg6PXVOyOxh9QOnMkS0dvydRA&s" />
            <div className='text-[16px]'>
                <p className='font-semibold'>Jon Doe</p>
                <p className='font-semibold'>CEO of XYZ Limited</p>
                <p className='mt-2'>Working with shayan was an amazing experience. He guide me all the way in developing the site. He charged me less as conpared to the market.</p>
            </div>
        </div>
    )
}

export default Testimonials
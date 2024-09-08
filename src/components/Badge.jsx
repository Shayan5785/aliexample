import React from 'react'

const Badge = () => {
    return (
        <div className='flex flex-col gap-6 w-min'>
            <div className='border-8 border-amber-300 p-8 text-[32px] font-bold w-min rounded-full'>
                8+
            </div>
            <div>
                <p className='text-center'>years</p>
                <p className='text-center text-amber-500 font-medium'>Experience</p>
            </div>
        </div>
    )
}

export default Badge
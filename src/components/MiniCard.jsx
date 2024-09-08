import React from 'react'

const MiniCard = ({ logo, title, description }) => {
    return (
        <div className='border-4 border-amber-500 p-4'>
            <div className='flex justify-center'>
                <img src={logo} width={100} />
            </div>
            <h2 className='text-3xl font-medium mt-6 text-center'>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default MiniCard
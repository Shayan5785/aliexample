import React from 'react'
import Badge from './Badge'

const BadgeContainer = () => {
    return (
        <div className='flex flex-wrap justify-center gap-32 mt-24'>
            <Badge />
            <Badge />
            <Badge />
        </div>
    )
}

export default BadgeContainer
import React from 'react'

const Songs = ({ src, title, description }) => {
    return (
        <div className='space-y-2'>
            <img src={src} alt="" className='w-56' />

            <div className="flex flex-col font-inter"><span className='text-white font-semibold'>{title}</span><span className='text-slate-100'>{description}</span></div>
        </div>
    )
}

export default Songs
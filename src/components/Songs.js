import React from 'react'

const Songs = ({ src, title, description }) => {
    return (
        <div className='space-y-2 w-[162px] '>
            <img src={src} alt="" className='' />

            <div className="flex flex-col font-inter"><span className='text-white text-sm font-semibold'>{title}</span><span className='text-slate-100 text-sm font-inter'>{description}</span></div>
        </div>
    )
}

export default Songs
import React from 'react'

const SuggestionSongs = ({ src, title, description }) => {
    return (
        <div className='flex flex-col w-28 items-center mt-4  gap-y-2  '>

            <div className="h-12 w-12 rounded-full ">
                <img src={src} alt="" />

            </div>

            <div className="    gap-y-1">
                <div className='text-white font-inter text-sm  flex   justify-center '>{title}</div>
                <div className=' font-inter text-xs font-normal text-gray-400 w-full flex  justify-center'>{description}</div>
            </div>


        </div>
    )
}

export default SuggestionSongs
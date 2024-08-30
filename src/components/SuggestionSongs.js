import React from 'react'

const SuggestionSongs = ({ src, title, description }) => {
    return (
        <div className='flex flex-col w-28 flex-shrink-0 items-center mt-2  gap-y-2  '>

            <div className="h-14 w-14 rounded-full ">
                <img src={src} alt="" />

            </div>

            <div className="    gap-y-1">
                <div className='text-[#E4E7E5] font-inter text-sm  flex   justify-center '>{title}</div>
                <div className=' font-inter text-xs font-normal text-[#AFB6B2] w-full flex  justify-center'>{description}</div>
            </div>


        </div>
    )
}

export default SuggestionSongs
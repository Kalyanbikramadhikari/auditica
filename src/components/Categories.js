import React from 'react'

const Categories = () => {
    return (
        <div className='mt-10 mb-16'>
            {/* title */}
            <div className="flex  justify-between  ">
                <div className="flex gap-x-4">
                    <span className="text-[22px] font-semibold text-white font-inter">Categories</span>

                </div>

                <div className="flex text-secondary-main font-inter font-medium ">See all</div>

            </div>

            <div className="flex flex-wrap gap-[8px]">
                <img src="/images/pop.png" alt="" className='w-[169px] h-[85px] object-cover' />
                <img src="/images/chill.png" alt="" className='w-[169px] h-[85px] object-cover' />
                <img src="/images/podcast.png" alt="" className='w-[169px] h-[85px] object-cover' />
                <img src="/images/christmas.png" alt="" className='w-[169px] h-[85px] object-cover' />
                <img src="/images/romance.png" alt="" className='w-[169px] h-[85px] object-cover' />
                <img src="/images/hiphop.png" alt="" className='w-[169px] h-[85px] object-cover' />
                <img src="/images/rock.png" alt="" className='w-[169px] h-[85px] object-cover' />
                <img src="/images/jazz.png" alt="" className='w-[169px] h-[85px] object-cover' />

            </div>
        </div>
    )
}

export default Categories
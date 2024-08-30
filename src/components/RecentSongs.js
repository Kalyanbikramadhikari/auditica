import React from 'react'

const RecentSongs = ({ index, src, title, singer, album, time, iconone, icontwo }) => {
    return (
        <div className='flex justify-between font-inter items-center space-x-3 '>
            <div className="flex space-x-2">
                <div className="flex items-center text-sm">{index}</div>
                <div className=""><img src={src} alt="" className='h-10' /></div>
                <div className="text-sm font-semibold flex items-center">{title}</div>
            </div>
            <div className="flex text-sm ">{singer}</div>
            <div className="flex text-sm ">{album}</div>
            <div className="flex space-x-3 text-sm items-center ">
                <div className="">{time}</div>
                <div className="">{iconone}</div>
                <div className="">{icontwo}</div>
            </div>

        </div>
    )
}

export default RecentSongs
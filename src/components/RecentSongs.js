import React from 'react'

const RecentSongs = ({ index, src, title, singer, album, time, iconone, icontwo }) => {
    return (
        <div className={`flex justify-between mt-3  font-inter items-center space-x-3 w-full ${singer==="Rose"?'text-secondary-main':''}`}>
            <div className="flex space-x-2 w-2/5">
                <div className="flex items-center text-sm w-4">{index}</div>
                <div className=""><img src={src} alt="" className='h-10' /></div>
                <div className="text-sm font-semibold flex items-center">{title}</div>
            </div>
            <div className="flex text-sm w-1/5">{singer}</div>
            <div className="flex text-sm w-1/5">{album}</div>
            <div className="flex space-x-3 text-sm items-center">
                <div className="">{time}</div>
                <div className="">{iconone}</div>
                <div className="">{icontwo}</div>
            </div>

        </div>
    )
}

export default RecentSongs
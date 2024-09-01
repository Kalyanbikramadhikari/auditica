import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
const TopStreamSong = ({ index, src, title, singer, time }) => {
    return (
        <div className='flex items-center space-x-2 font-inter '>
            <div className="text-secondary-text text-sm">{index}</div>

            <div className="border-b-[1px] py-3 border-secondary-text flex items-center justify-between w-full">
                <div className="flex items-center">
                    <div className=""><img src={src} alt="" className='h-12 ' /></div>
                    <div className="flex flex-col ml-1">
                        <span className='text-white font-inter text-sm font-semibold'>{title}</span>
                        <span className='text-secondary-text text-sm'>{singer}</span>

                    </div>
                </div>
                <div className="flex space-x-2 text-secondary-text text-sm items-center">
                    <span>{time}</span>
                    <FavoriteBorderOutlinedIcon style={{ fontSize: '22px' }} />
                    <MoreHorizOutlinedIcon />


                </div>
            </div>



        </div>
    )
}

export default TopStreamSong
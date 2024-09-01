import React from 'react'
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';


const PlayingSong = () => {
  return (
    <div className='flex fixed bottom-0 border-t-[1px] border-secondary-text w-full bg-primary-background text-white  font-inter z-50'>
      <div className="flex items-center space-x-1 ml-12 p-1">
        <ShuffleOutlinedIcon style={{ fontSize: '26px' }} />
        <SkipPreviousIcon style={{ fontSize: '35px' }} />
        <PauseCircleFilledOutlinedIcon style={{ fontSize: '35px' }} />
        <SkipNextIcon style={{ fontSize: '35px' }} />
        <RepeatOutlinedIcon style={{ fontSize: '28px' }} />
      </div>
      <div className="flex items-center ml-28 border-r-[1px] border-secondary-text pr-20 p-1  ">
        <img src="/images/ontheground.png" alt="" className='h-12' />
        <div className="flex flex-col ml-12">
          <div className="flex justify-center space-x-3">
            <span className='font-semibold'>On The Ground</span>
            <span className='-mt-1 font-bold'>.</span>
            <span className='text-secondary-text font-medium'>Rose</span>
          </div>
          <div className="flex justify-center  space-x-2 -mt-2 items-center">
            <span className=' text-xs text-secondary-text font-medium'>2:45</span>
            <img src="images/line.png" alt="" className='w-[630px] h-4' />
            <span className=' text-xs text-secondary-text font-medium'>3:27</span>
          </div>

        </div>
      </div>
      <div className="p-1 flex items-center justify-center  px-[70px] space-x-3">
        <ModeCommentOutlinedIcon  style={{fontSize:'20px'}}/>
        <PlaylistAddOutlinedIcon  style={{fontSize:'20px'}}/>
        <FavoriteOutlinedIcon  style={{fontSize:'20px'}}/>
        <MoreHorizOutlinedIcon style={{fontSize:'20px'}} />
        <VolumeUpOutlinedIcon  style={{fontSize:'20px'}}/>
      </div>

    </div>
  )
}

export default PlayingSong
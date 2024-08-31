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
    <div className='fixed bottom-0 border-t-[1px] w-full bg-primary-background text-white'>
        <div className="flex">
            <ShuffleOutlinedIcon/>
            <SkipPreviousIcon/>
            <PauseCircleFilledOutlinedIcon/>
            <SkipNextIcon/>
            <RepeatOutlinedIcon/>
        </div>
        <div className=""></div>
        <div className=""></div>

    </div>
  )
}

export default PlayingSong
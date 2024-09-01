import React from 'react'
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PauseIcon from '@mui/icons-material/Pause';
import RecentSongs from './RecentSongs';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
const RecentlyPlayed = () => {
    return (
        <div className='mt-6 mb-16'>
            {/* title */}
            <div className="flex  justify-between ">
                <div className="flex gap-x-4">
                    <span className="text-[22px] font-semibold text-white font-inter">Recently Played</span>
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-secondary-main mt-1">
                        <PauseIcon style={{fontSize:'17px'}} />
                    </div>
                </div>

                <div className="flex text-secondary-main font-inter font-medium ">See more</div>

            </div>


            {/* recently payed songs */}

            <div className="flex flex-col text-[#AFB6B2] font-inter gap-4">
                <RecentSongs index="1" src="images/alliwant.png" singer="Maria Carey" album="Album" title="All I Want For Christmas Is You" time="3:54" iconone={<FavoriteBorderIcon/>} icontwo={<DragHandleIcon/>}/>
                <RecentSongs index=<PauseCircleOutlineOutlinedIcon style={{fontSize:'16px', color:'#EE4950'}}/> src="images/ontheground.png" singer="Rose" album="-R-" title="On the ground" time="3:54" iconone={<FavoriteBorderIcon/>} icontwo={<DragHandleIcon/>}/>

                <RecentSongs index="2" src="images/donda.png" singer="Kanye West" album="Donda" title="Donda" time="3:54" iconone={<FavoriteBorderIcon/>} icontwo={<DragHandleIcon/>}/>

            </div>



        </div>
    )
}

export default RecentlyPlayed
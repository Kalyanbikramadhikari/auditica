import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Songs from './Songs';

const NewReleases = () => {
    return (
        <div className='mt-12'>
            {/* title */}
            <div className="flex  justify-between ">
                <div className="flex gap-x-4">
                    <span className="text-[26px] font-semibold text-white font-inter">New Releases</span>
                    <div className="rounded-full h-8 w-8 flex items-center justify-center bg-secondary-main mt-1">
                        <PlayArrowIcon />
                    </div>
                </div>

                <div className="flex text-secondary-main font-inter font-semibold ">See more</div>

            </div>

            {/* songs */}
            <div className='flex overflow-hidden gap-x-4 w-full mt-3 '>
                <Songs src="images/taylor.png" title="Red (Taylor's Version)" description="Taylor Swift" />
                <Songs src="images/needto.png" title="Need To Know" description="Doja Cat" />
                <Songs src="images/afterhours.png" title="After Hours" description="The Weeknd" />
                <Songs src="images/hitmachine.png" title="HIT MACHINE" description="SoundWave" />
                {/* <Songs src="images/taylor.png" title="Red (Taylor's Version)" description="Taylor Swift" />
                <Songs src="images/taylor.png" title="Red (Taylor's Version)" description="Taylor Swift" />
                <Songs src="images/taylor.png" title="Red (Taylor's Version)" description="Taylor Swift" />
                <Songs src="images/taylor.png" title="Red (Taylor's Version)" description="Taylor Swift" /> */}

            </div>


        </div>
    )
}

export default NewReleases
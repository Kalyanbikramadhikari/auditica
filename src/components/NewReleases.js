import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Songs from './Songs';
import '../App.css'

const NewReleases = () => {
    return (
        <div className='mt-6'>
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
            <div className="scrollable-container">
                <div className='flex space-x-3 mt-3'>
                    <Songs src="images/taylor.png" title="Red (Taylor's Version)" description="Taylor Swift" />
                    <Songs src="images/needto.png" title="Need To Know" description="Doja Cat" />
                    <Songs src="images/afterhours.png" title="After Hours" description="The Weeknd" />
                    <Songs src="images/hitmachine.png" title="HIT MACHINE" description="SoundWave" />
                    <Songs src="images/taylor.png" title="Red (Taylor's Version)" description="Taylor Swift" />
                    <Songs src="images/needto.png" title="Need To Know" description="Doja Cat" />
                    <Songs src="images/afterhours.png" title="After Hours" description="The Weeknd" />
                    <Songs src="images/hitmachine.png" title="HIT MACHINE" description="SoundWave" />

                </div>
            </div>


        </div>
    )
}

export default NewReleases
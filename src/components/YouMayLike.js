import React from 'react'
import SuggestionSongs from './SuggestionSongs'

const YouMayLike = () => {
    return (
        <div className='mt-6'>
            {/* title */}
            <div className="flex  justify-between ">
                <div className="flex gap-x-4">
                    <span className="text-[26px] font-semibold text-white font-inter">You May Like</span>

                </div>

                <div className="flex text-secondary-main font-inter font-semibold ">See more</div>

            </div>


            {/* suggestion songs section */}
            <div className="scrollable-container">
                <div className="flex w-full space-x-6">
                    <SuggestionSongs src="/images/waybackhome.png" title="Way Back Home" description="SHAUN" />
                    <SuggestionSongs src="/images/rockabye.png" title="Rockabye" description="The Clean Bandit" />
                    <SuggestionSongs src="/images/graduation.png" title="Graduation" description="Kanye West" />
                    <SuggestionSongs src="/images/stay.png" title="Stay" description="Zedd" />
                    <SuggestionSongs src="/images/abcdefu.png" title="abcdefu" description="GAYLE" />
                    <SuggestionSongs src="/images/badhabits.png" title="Bad Habits" description="Ed Sheeran" />
                    <SuggestionSongs src="/images/atmyworst.png" title="At My Worst" description="Pink Sweat$" />
                    <SuggestionSongs src="/images/waybackhome.png" title="Way Back Home" description="SHAUN" />
                    <SuggestionSongs src="/images/rockabye.png" title="Rockabye" description="The Clean Bandit" />
                    <SuggestionSongs src="/images/graduation.png" title="Graduation" description="Kanye West" />
                    <SuggestionSongs src="/images/stay.png" title="Stay" description="Zedd" />
                    <SuggestionSongs src="/images/abcdefu.png" title="abcdefu" description="GAYLE" />
                    <SuggestionSongs src="/images/badhabits.png" title="Bad Habits" description="Ed Sheeran" />
                    <SuggestionSongs src="/images/atmyworst.png" title="At My Worst" description="Pink Sweat$" />
                    {/* <SuggestionSongs src="/images/waybackhome.png" title="Way Back Home" description="SHAUN"/> */}

                </div>
            </div>


        </div>
    )
}

export default YouMayLike
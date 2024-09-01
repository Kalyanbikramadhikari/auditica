import React from 'react';
import TopStreamSong from './TopStreamSong';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TopStreams = () => {
    return (
        <div className='flex flex-col font-inter bg-[#87878784] text-white rounded-md overflow-hidden z-20 relative'>
            <div className="flex  w-full items-center p-2 px-3 justify-between">
                <div className="flex">
                    <span>Top Streams Real Time</span>
                </div>

                <div className="flex bg-[#a8acaac3] items-center p-1 rounded-sm h-auto justify-end space-x-2">
                    <div className="bg-secondary-main rounded-sm p-1 px-2">Local</div>
                    <div className="">Global</div>
                </div>


            </div>
            <div className="vertical-scrollable-container ">

                <div className="flex flex-col p-2 pl-3  ">
                    {/* hello */}
                    <TopStreamSong index="1" src="/images/justinbiber.png" title="Mistletoe" singer="Justin Biber" time="3:54" />
                    <TopStreamSong index="2" src="/images/adele.png" title="Easy On Me" singer="Adele " time="3:54" />
                    <TopStreamSong index="3" src="/images/public.png" title="Moonlight" singer="Public Library Com..." time="3:54" />
                    <TopStreamSong index="4" src="/images/travisscott.png" title="SICKO MODE" singer="Travis Scott ft.Drake" time="3:54" />
                    <TopStreamSong index="5" src="/images/vincent.png" title="Get Lost" singer="Vincent Gable" time="3:54" />
                    <TopStreamSong index="6" src="/images/pink.png" title="I Feel Good" singer="Pink Sweat$" time="3:54" />
                    <TopStreamSong index="7" src="/images/88rising.png" title="Midsummer Madness" singer="88rising" time="3:54" />
                    <TopStreamSong index="8" src="/images/travistwo.png" title="SICKO MODE" singer="Travis Scott ft. Drake" time="3:54" />
                    <TopStreamSong index="9" src="/images/justinbiber.png" title="Mistletoe" singer="Justin Biber" time="3:54" />
                    {/* <TopStreamSong index="10" src="/images/justinbiber.png" title="Mistletoe" singer="Justin Biber" time="3:54" />
                <TopStreamSong index="11" src="/images/justinbiber.png" title="Mistletoe" singer="Justin Biber" time="3:54" /> */}
                    <TopStreamSong index="10" src="/images/adele.png" title="Easy On Me" singer="Adele " time="3:54" />
                    <TopStreamSong index="11" src="/images/public.png" title="Moonlight" singer="Public Library Com..." time="3:54" />
                    <TopStreamSong index="12" src="/images/travisscott.png" title="SICKO MODE" singer="Travis Scott ft.Drake" time="3:54" />
                    <TopStreamSong index="13" src="/images/vincent.png" title="Get Lost" singer="Vincent Gable" time="3:54" />
                    <TopStreamSong index="14" src="/images/pink.png" title="I Feel Good" singer="Pink Sweat$" time="3:54" />






                </div>


            </div>
            <div className="flex  justify-center items-center absolute bottom-0 left-0 right-0 bg-[#515151] text-white py-3 z-20 rounded-b-md">
                <span className='text-secondary-text'>Expand <KeyboardArrowDownIcon /></span>
                <span className="ml-2 text-secondary-text"></span>
            </div>
        </div>
    );
}

export default TopStreams;

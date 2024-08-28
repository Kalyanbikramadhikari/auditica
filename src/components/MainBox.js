import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const MainBox = () => {
    return (
        <div className=''>


            {/* for banner images */}
            <div className="relative ">
                <div className="absolute z-20">
                    <img src="/images/banner.png" alt="" />

                </div>
                <div className="absolute z-10">
                    <img src="/images/bannerimage.png" alt="" />
                </div>

                <div className="flex w-full justify-center ">
                    <div className="flex justify-center mt-4 z-30 absolute   p-2 bg-[#ffffff] rounded-md w-[50%] ">
                        <div className="flex w-full justify-between items-center text-gray-500">
                            <div className="flex w-full  border-r-[2px] border-gray-300 items-center gap-x-2">
                                <div className="flex">
                                    <SearchIcon />
                                </div>
                                <div className="flex w-full items-center ">
                                    <input type="text" placeholder='Search, artists, songs, albums...' className='outline-none w-full text-base' />

                                </div>
                            </div>

                            <div className="flex ml-1">
                                <MicIcon />
                            </div>


                        </div>
                    </div>






                </div>




                {/* bottom left section */}

                <div className="flex justify-between mt-48 px-5  relative   z-30  text-white " >
                    <div className="flex flex-col gap-1 ">
                        <div className='flex text-base font-bold'>R&B</div>
                        <div className='flex text-base font-bold text-gray-400 '>Pop</div>
                        <div className='flex text-[15px] font-semibold'>Rap</div>
                        <div className='flex text-[14px] font-semibold'>Ballad</div>
                        <div className='flex text-[13px] font-semibold'>Country</div>
                        <div className='flex text-[12px] font-semibold'>Hip Hop</div>
                    </div>
                    <div className=" mr-4 flex flex-col justify-end items-end space-y-7 pb-6  -mt-4">
                        <div className="">
                            <span className='font-bold '>FEATURED SONGS</span>

                        </div>

                        <div className="flex flex-col items-end">
                            <span className='flex text-2xl'>Post Malone</span>
                            <span className='flex text-[35px] font-bold'>Circles</span>
                        </div>
                        <div className="flex items-center gap-5">

                            <MoreHorizIcon style={{ fontSize: '40px' }} />

                            <FavoriteBorderIcon style={{ fontSize: '35px' }} />

                            <button className='flex px-9 p-2 rounded-md bg-[#EE4950] font-bold'>Play</button>





                        </div>


                    </div>


                </div>



            </div>





        </div>


    )
}

export default MainBox
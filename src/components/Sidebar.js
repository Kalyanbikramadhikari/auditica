import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';

const Sidebar = () => {

  const sidebarData = [
    {
      icon: <HomeIcon />,
      title: "Home"
    },
    {
      icon: <FavoriteBorderIcon />,
      title: "Favorites"
    },
    {
      icon: <HeadsetOutlinedIcon />,
      title: "Music"
    },
    {
      icon: <DashboardOutlinedIcon />,
      title: "Dashboard"
    }
  ];

  return (
    <div className=' bg-primary-background h-lvh w-[15%] border-r-[1px] border-primary-text px-3 py-3'>
      <div className="flex flex-col">
        <img src="/images/logo.png" alt="" className='w-28' />
      </div>
      <div className="flex flex-col mt-9 space-y-2">
        {sidebarData.map((item, index) => (
          <div key={index} className={`flex items-center space-x-4 p-2 rounded-sm ${index===0?"bg-secondary-main":"hover:bg-secondary-main"} `}>
            <span className='flex text-white '>
              {item.icon}

            </span>
            <span className='font-inter text-primary-text'>{item.title}</span>
          </div>
        ))}
      </div>

      {/* third div of sidebar */}
      <div className="flex flex-col px-2 space-y-3">

        <div className="flex justify-between mt-8">
          <div className="flex text-[#309dae] space-x-3">
            <span>
              <HomeIcon />
            </span>
            <span>
              Home
            </span>
          </div>
          <div className="flex text-white">
            <ControlPointRoundedIcon />
          </div>

        </div>

        <div className="flex text-[#F3777D] space-x-2">
          <span className="">
            For workplace
          </span>
          <span>
            <BarChartIcon />
          </span>
        </div>
        <div className="text-secondary-text space-y-2">
          <span className="flex text-[15px] font-inter">Rich Brian's collections</span>
          <span className="flex text-[15px] font-inter">deep focus</span>
          <span className="flex text-[15px] font-inter">Lo-Fi Jazz upbeat</span>
          <span className="flex text-[15px] font-inter">For workplace</span>
          <span className="flex text-[15px] font-inter">Christmas playlist</span>
        </div>



      </div>
    </div>
  );
}

export default Sidebar;

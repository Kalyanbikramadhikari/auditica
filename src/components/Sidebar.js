import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

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
    <div className=' bg-primary-background h-lvh w-[15%] border-r-[1px] border-primary-text'>
      <div className="flex flex-col">
        <img src="/assets/images/logo.png" alt="" />
      </div>
      <div className="flex flex-col">
        {sidebarData.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 p-3">
            <span className='flex text-white '>
              {item.icon}

            </span>
            <span className='font-inter text-primary-text'>{item.title}</span>
          </div>
        ))}
      </div>

      {/* third div of sidebar */}
      <div className="flex flex-col">

        <div className="flex justify-between">
          <div className="flex">
            <span>
              <HomeIcon />
            </span>
            <span>
              Home
            </span>
          </div>
          <div className="flex">
            {/* add plus icon here */}
          </div>

        </div>

        <div className="flex text-secondary-main space-x-2">
          <span className="">
            For workplace
          </span>
          <span>
            {/* add bar icon here */}
          </span>
        </div>

        <span className="flex">Rich Brian's collections</span>
        <span className="flex">deep focus</span>
        <span className="flex">Lo-Fi Jazz upbeat</span>
        <span className="flex">For workplace</span>
        <span className="flex">Christmas playlist</span>
      </div>
    </div>
  );
}

export default Sidebar;

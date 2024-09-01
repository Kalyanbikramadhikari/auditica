import './App.css';
import Categories from './components/Categories.js';
import MainBox from './components/MainBox.js';
import NewReleases from './components/NewReleases.js';
import PlayingSong from './components/PlayingSong.js';
import RecentlyPlayed from './components/RecentlyPlayed.js';
import Sidebar from './components/Sidebar.js';
import TopStreams from './components/TopStreams.js';
import YouMayLike from './components/YouMayLike.js';

function App() {
  return (
    <div className="flex  bg-[#171717] ">
      {/* <div className="flex space-x-8"> */}

      <div className="flex z-20 fixed bottom-0 w-[100%]">
        <PlayingSong />

      </div>
      <Sidebar />
      <div className=" space-x-[260px] flex flex-col w-[75%] mt-4">
        <MainBox />
        <NewReleases />
        <YouMayLike />
        <RecentlyPlayed />

      </div>

      <div className="flex flex-col  w-full ml-[32px] mt-4 ">
        <TopStreams />
        <Categories />
      </div>




    </div>
  );
}

export default App;

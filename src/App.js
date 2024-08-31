import './App.css';
import MainBox from './components/MainBox.js';
import NewReleases from './components/NewReleases.js';
import PlayingSong from './components/PlayingSong.js';
import RecentlyPlayed from './components/RecentlyPlayed.js';
import Sidebar from './components/Sidebar.js';
import YouMayLike from './components/YouMayLike.js';

function App() {
  return (
    <div className="flex  bg-primary-background ">
      {/* <div className="flex space-x-8"> */}

      <div className="flex z-20 fixed bottom-0 w-[100%]">
        <PlayingSong />

      </div>
      <Sidebar />
      <div className=" space-x-[260px] flex flex-col w-[60%]">
        <MainBox />
        <NewReleases />
        <YouMayLike />
        <RecentlyPlayed />

      </div>
      



    </div>
  );
}

export default App;

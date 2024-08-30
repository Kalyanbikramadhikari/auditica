import './App.css';
import MainBox from './components/MainBox.js';
import NewReleases from './components/NewReleases.js';
import RecentlyPlayed from './components/RecentlyPlayed.js';
import Sidebar from './components/Sidebar.js';
import YouMayLike from './components/YouMayLike.js';

function App() {
  return (
    <div className="flex  bg-primary-background space-x-[260px]">
      {/* <div className="flex space-x-8"> */}


      <Sidebar />
      <div className="flex flex-col w-[60%]">
        <MainBox />
        <NewReleases />
        <YouMayLike />
        <RecentlyPlayed />
      </div>


    </div>
  );
}

export default App;

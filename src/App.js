import './App.css';
import MainBox from './components/MainBox.js';
import NewReleases from './components/NewReleases.js';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <div className="flex  bg-primary-background space-x-8">
      {/* <div className="flex space-x-8"> */}


      <Sidebar />
      <div className="flex flex-col w-[60%]">
        <MainBox />
        <NewReleases />
      </div>


    </div>
  );
}

export default App;

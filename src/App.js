import './App.css';
import MainBox from './components/MainBox.js';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <div className="flex bg-primary-background space-x-8">

      <Sidebar />
      <MainBox />

    </div>
  );
}

export default App;

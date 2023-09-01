import './App.scss';
// import Header from './components/Header';
import SideNav from './components/SideNav';
import Main from './components/Main';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import FollowCursor from './components/FollowCursor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header/> */}
        <SideNav/>
        <FollowCursor />
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

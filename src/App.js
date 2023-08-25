import './App.scss';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Main from './components/Main';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <SideNav/>
          <Routes>
            <Route path='/' element={<Main/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

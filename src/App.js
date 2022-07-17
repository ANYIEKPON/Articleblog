import Topbar from '../src/components/Topbar/Topbar.jsx';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Settings from './pages/settings/Settings.jsx';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';


function App() {
  const user = false;
  return (
    
    <Router>
      <div className='topTop'>
        <div className="App">
            <div className='topBar'><Topbar /></div>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/login' element={ user ? <Home /> : <Login />} />
              <Route path='/register' element={user ? <Home /> : <Register />} />
              <Route path='/settings' element={ user ? <Settings /> : <Register />} />
              <Route path='/post/:postId' element={<Single />} />
              <Route path='/write' element={ user ? <Write /> : <Register />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

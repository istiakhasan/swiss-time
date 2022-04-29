
import './App.css';
import Menubar from './components/Shared/Menubar/Menubar';
import Home from './components/Page/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Inventory from './components/Page/Inventory/Inventory';
import Login from './components/Page/Login/Login/Login';
import Register from './components/Page/Login/Register/Register';

function App() {
  return (
    <div>
        <Menubar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/inventory/:id' element={<Inventory />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
       
    </div>
  );
}

export default App;

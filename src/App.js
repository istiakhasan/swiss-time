
import './App.css';
import Menubar from './components/Shared/Menubar/Menubar';
import Home from './components/Page/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Inventory from './components/Page/Inventory/Inventory';
import Login from './components/Page/Login/Login/Login';
import Register from './components/Page/Login/Register/Register';
import Footer from './components/Shared/Footer/Footer';
import PrivateRoute from './components/Page/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
        <Menubar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/inventory/:id' element={
            <PrivateRoute>
              <Inventory />
            </PrivateRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
       
    </div>
  );
}

export default App;

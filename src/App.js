
import './App.css';
import Menubar from './components/Shared/Menubar/Menubar';
import Home from './components/Page/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Inventory from './components/Page/Inventory/Inventory';
import Login from './components/Page/Login/Login/Login';
import Register from './components/Page/Login/Register/Register';
import Footer from './components/Shared/Footer/Footer';
import PrivateRoute from './components/Page/Login/PrivateRoute/PrivateRoute';
import ManageInventory from './components/Page/ManageInventory/ManageInventory';
import AddInventory from './components/Page/AddInventory/AddInventory';
import MyItems from './components/Page/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './components/Page/Blog/Blog';
import NotFound from './components/Page/NotFound/NotFound';
import ContactUs from './components/Page/ContactUs/ContactUs';
function App() {
  return (
    <div>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/inventory/:id' element={
            <PrivateRoute>
              <Inventory />
            </PrivateRoute>
          } />
          <Route path='/manageinventory' element={
            <PrivateRoute>
              <ManageInventory />
            </PrivateRoute>
          } />
          <Route path='/addinventory' element={
            <PrivateRoute>
              <AddInventory />
            </PrivateRoute>
          } />
          <Route path='/myitems' element={
            <PrivateRoute>
              <MyItems />
            </PrivateRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='*' element={<NotFound  />} />
        </Routes>
        
       <ToastContainer />
    </div>
  );
}

export default App;

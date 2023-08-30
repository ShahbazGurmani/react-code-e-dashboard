
import './App.css';
import Nav from './components/Nav';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateCom from './components/PrivateCom';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
           
          <Route element={<PrivateCom/>}>
           <Route path='/' element={<ProductList/>}/>
           <Route path='/add' element={<AddProduct/>}/>
           <Route path='/update' element={<h1>Products Update Component</h1>}/>
           <Route path='/logout' element={<h1>Logout Component</h1>}/>
           <Route path='/profile' element={<h1>profile Component</h1>}/>
          
          </Route>

          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>

        </BrowserRouter> 
        <Footer/>
    </div>
  );
}

export default App;

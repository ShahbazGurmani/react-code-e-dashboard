
import './App.css';
import Nav from './components/Nav';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import privateComponent from './components/privateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          
          <Route element={<privateComponent/>}>
          <Route path='/' element={<h1>Product Listing Component</h1>}/>
          <Route path='/add' element={<h1>Add Product Component</h1>}/>
          <Route path='/update' element={<h1>Products Update Component</h1>}/>
          <Route path='/logout' element={<h1>Logout Component</h1>}/>
          <Route path='/profile' element={<h1>profile Component</h1>}/>
          </Route>

          <Route path='/signup' element={<Signup/>}/>
        </Routes>

        </BrowserRouter> 
        <Footer/>
    </div>
  );
}

export default App;

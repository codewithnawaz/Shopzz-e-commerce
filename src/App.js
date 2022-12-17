
import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import { Route, Routes } from 'react-router-dom'
import CategoryItem from './Components/CategoryItem';
import Categories from './Components/Categories';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/productlist' element={<ProductList />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/product' element={<Product />} />
    </Routes>
  );
}

export default App;

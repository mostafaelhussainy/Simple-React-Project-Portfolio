import CounterMain from "./Counter/CounterMain";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Products from "./Products/Products";
import Product from "./Products/Product";
import './App.css'

function App() {

 
  return (
  <BrowserRouter>
      <nav>
        <div className="logo">React Portoflio</div>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/counter'>Counter</Link>
          <Link to='/products'>Products</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/products" element = {<Products />}/>
        <Route path="/product/:id" element = {<Product />}/>
        <Route path='/counter' element = {<CounterMain />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;

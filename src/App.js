import './App.css'
import Navbar from './components/Navbar.js'
import Home from './components/Home/Home.js'
import Footer from './components/Footer.js'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact.js'
import ItemDetail from './components/ItemDetail.js'
import Cart from './components/Cart.js'
import { CartProvider } from './context/CartContext.js'

export default function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route
            path='/' element={<Home subject={'Home'} />}>
          </Route>
          <Route
            path='/category/:filter'
            element={<Home subject={'Filtered'} />}>
          </Route>
          <Route
            path='/aboutUs'
            element={<AboutUs />}>
          </Route>
          <Route
            path='/cart'
            element={<Cart />}>
          </Route>
          <Route
            path='/contact'
            element={<Contact />}>
          </Route>
          <Route
            path='/detail/:ginId'
            element={<ItemDetail />}>
          </Route>
          {/* <Route path='*' element={<NotFound />}></Route> */}
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
} 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Inicio from './routes/Inicio/Inicio';
import Contacto from './routes/Contacto/Contacto';
import Nosotros from './routes/Nosotros/Nosotros';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
          <Routes>
            <Route exact path= "/" element={<Inicio />} />
            <Route exact path="/productos" element= {<ItemListContainer />} />
            <Route exact path="/category/:id" element= {<ItemListContainer />} />
            <Route exact path="/productos" element= {<ItemListContainer />} />
            <Route exact path="/cart" element= {<CartContainer />} />
            <Route exact path="/item/:id" element= {<ItemDetailContainer />} />
            <Route exact path= "/contacto" element={<Contacto />} />
            <Route exact path= "/nosotros" element={<Nosotros />} />
          </Routes>
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

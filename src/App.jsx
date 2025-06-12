import './styles/carrusel.css'
import './styles/Navbar.css';
import './styles/tarjetas.css' // <-- Importa aquí, no en cada componente
import './styles/Buscador.css'
import './styles/sugerencias.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import C1 from "./components/categorias/c1";
import C2 from './components/categorias/c2';
import C3 from './components/categorias/c3';
import C4 from './components/categorias/c4';
import C5 from './components/categorias/c5';
import C6 from './components/categorias/c6';
import C7 from './components/categorias/c7';
import C8 from './components/categorias/c8';
import C9 from './components/categorias/c9';
import ProductDetail from './components/ProductDetalles';
// IMPORTANTE: importar el componente Buscar
import Buscar from './components/Buscar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/C1" element={<C1 />} />
        <Route path="/C2" element={<C2 />} />
        <Route path="/C3" element={<C3 />} />
        <Route path="/C4" element={<C4 />} />
        <Route path="/C5" element={<C5 />} />
        <Route path="/C6" element={<C6 />} />
        <Route path="/C7" element={<C7 />} />
        <Route path="/C8" element={<C8 />} />
        <Route path="/C9" element={<C9 />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        {/* Ruta de búsqueda agregada */}
        <Route path="/buscar" element={<Buscar />} />
        {/* ...otras rutas... */}
      </Routes>
    </Router>
  );
}

export default App;
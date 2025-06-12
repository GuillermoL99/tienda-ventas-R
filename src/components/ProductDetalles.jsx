import React from "react";
import { useParams } from "react-router-dom";
import productos from "../logicas/productos";
import Navbar from "./navbar";
import Carrusel from "./carrusel";
import Breadcrumbs from "./rastrodenav";

function ProductDetail() {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }
  // Ejemplo: rutas dinámicas según el producto
  const rutas = [
    { nombre: "Inicio", url: "/" },
    
    ...(producto.categorias || []), // si tu producto tiene un array de categorías
    { nombre: producto.nombre, url: null }
  ]; 
  return (
    
    <div>
      <Navbar mostrarInicio={true} />
      <div className="detalle-producto">
        <Breadcrumbs rutas={rutas} />
        <h2>{producto.nombre}</h2>
        <div style={{ display: "flex", gap: "24px" }}>
          <div>
            <Carrusel imagenes={producto.imagenes || [producto.imagen]} ancho={270} alto={200} />
          </div>
          <div>
            <div className="precio" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>${producto.precio}</div>
            <p>{producto.descripcion}</p>
            <button type="button">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
          
        
    
  );
}

export default ProductDetail;
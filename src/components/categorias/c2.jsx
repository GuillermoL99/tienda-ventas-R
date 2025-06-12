import React from "react";
import Navbar from "../navbar";
import productos from "../../logicas/productos";
import ProductCard from "../ProductCard";

function C2() {

  const productosC1 = productos.filter(p => p.categoria === "c2");

  return (
    <>
      <Navbar mostrarInicio={true} />
      <h2>Productos de la Categoría C2</h2>
      <div className="productos-grid">
        {productosC1.map(producto => (
          <ProductCard key={producto.id} {...producto} />
        ))}
      </div>
    </>
  );
}

export default C2;
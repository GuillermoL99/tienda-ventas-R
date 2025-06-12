import React from "react";
import { useLocation } from "react-router-dom";
import productos from "../logicas/productos";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

// Hook para obtener el query param ?q=
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Buscar() {
  const query = useQuery();
  const busqueda = (query.get("q") || "").toLowerCase();

  // Filtrado simple: busca en nombre y descripción
  const resultados = productos.filter(
    p =>
      p.nombre.toLowerCase().includes(busqueda) ||
      p.descripcion.toLowerCase().includes(busqueda)
  );

  return (
    <>
      <Navbar mostrarInicio={true} />
      <h2>
        Resultados de búsqueda para: <span style={{ color: "#ff5200" }}>{query.get("q")}</span>
      </h2>
      {resultados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <div className="productos-grid">
          {resultados.map(producto => (
            <ProductCard key={producto.id} {...producto} />
          ))}
        </div>
      )}
    </>
  );
}

export default Buscar;
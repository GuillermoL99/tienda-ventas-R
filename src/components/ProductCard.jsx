import React from "react";
import { Link } from "react-router-dom";
import Carrusel from "./carrusel";

function ProductCard({ id, nombre, precio, imagen, descripcion }) {
  return (
    <Link to={`/producto/${id}`} className="product-card-link" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="product-card">
        <img src={imagen} alt={nombre} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <div className="precio">${precio}</div>
        <button type="button">Ver más</button>
      </div>
    </Link>
  );
}

export default ProductCard;
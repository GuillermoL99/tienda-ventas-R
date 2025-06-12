import React, { useState } from "react";

function Carrusel({ imagenes = [], ancho = 220, alto = 150 }) {
  const [actual, setActual] = useState(0);

  const siguiente = (e) => {
    e.stopPropagation();
    setActual((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = (e) => {
    e.stopPropagation();
    setActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  if (!imagenes || imagenes.length === 0) return null;

  return (
    <div className="carrusel" style={{ width: ancho, height: alto, position: "relative" }}>
      <img
        src={imagenes[actual]}
        alt={`Imagen ${actual + 1}`}
        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }}
      />
      {imagenes.length > 1 && (
        <>
          <button className="carrusel-btn carrusel-btn-izq" onClick={anterior}>&lt;</button>
          <button className="carrusel-btn carrusel-btn-der" onClick={siguiente}>&gt;</button>
        </>
      )}
      <div className="carrusel-dots">
        {imagenes.map((_, idx) => (
          <span
            key={idx}
            className={idx === actual ? "activo" : ""}
            onClick={e => {e.stopPropagation(); setActual(idx);}}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import categorias from "../logicas/categorias.js";
import productos from "../logicas/productos.js"; // Asegúrate de que la ruta sea correcta

function Navbar({ mostrarInicio = false }) {
  const [open, setOpen] = useState(false);
  const [hoveredCatIdx, setHoveredCatIdx] = useState(null);
  const dropdownRef = useRef(null);

  // Búsqueda en vivo y sugerencias
  const [busqueda, setBusqueda] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const navigate = useNavigate();

  // Filtrar sugerencias en vivo
  useEffect(() => {
    if (busqueda.trim().length > 0) {
      const texto = busqueda.trim().toLowerCase();
      const filtrados = productos.filter(
        p =>
          p.nombre.toLowerCase().includes(texto) ||
          p.descripcion.toLowerCase().includes(texto)
      );
      setSugerencias(filtrados.slice(0, 8)); // Puedes ajustar la cantidad de sugerencias
    } else {
      setSugerencias([]);
    }
  }, [busqueda]);

  function handleKeyDown(e) {
    if (e.key === "Enter" && busqueda.trim() !== "") {
      navigate(`/buscar?q=${encodeURIComponent(busqueda)}`);
      setSugerencias([]);
    }
  }

  function handleClear() {
    setBusqueda("");
    setSugerencias([]);
  }

  function handleSuggestionClick(producto) {
    setBusqueda(producto.nombre);
    setSugerencias([]);
    navigate(`/producto/${producto.id}`);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
        setHoveredCatIdx(null);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="container">
      <header>
        <div className="header-main">
          <div className="logo">
            <span className="icon-logo">🛒</span>
            <span className="site-name">
              PLANETA PRECIO BAJO<span className="dotcom">.com</span>
            </span>
          </div>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Buscar productos"
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
            />
            {busqueda && (
              <button
                className="clear-btn"
                aria-label="Limpiar búsqueda"
                onClick={handleClear}
              >
                ×
              </button>
            )}
            {/* SUGERENCIAS EN VIVO */}
            {sugerencias.length > 0 && (
              <ul className="suggestions-list">
                {sugerencias.map(producto => (
                  <li
                    key={producto.id}
                    className="suggestion-item"
                    onMouseDown={() => handleSuggestionClick(producto)}
                  >
                    {producto.imagen && (
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="suggestion-img"
                      />
                    )}
                    <div className="suggestion-content">
                      <span className="suggestion-title">{producto.nombre}</span>
                      <span className="suggestion-price">
                        {producto.precio ? `$${producto.precio}` : ""}
                      </span>
                      <span className="suggestion-desc">
                        {producto.descripcion}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <nav>
          <ul className="nav-menu">
            <li className="dropdown" ref={dropdownRef} style={{ position: "relative" }}>
              <button
                className="dropdown-btn"
                id="categorias-btn"
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mega-dropdown"
              >
                CATEGORÍAS
              </button>
              {mostrarInicio && (
                <Link to="/">
                  <button className="dropdown-btn">INICIO</button>
                </Link>
              )}
              {open && (
                <div className={`mega-dropdown show`} id="mega-dropdown">
                  <div className="mega-dropdown-left">
                    <ul>
                      {categorias.map((cat, idx) => (
                        <li
                          key={cat.nombre}
                          onMouseEnter={() => setHoveredCatIdx(idx)}
                          onMouseLeave={() => setHoveredCatIdx(null)}
                          className={hoveredCatIdx === idx ? "active" : ""}
                        >
                          <Link to={cat.ruta} tabIndex={-1}>
                            {cat.nombre}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega-dropdown-center">
                    {hoveredCatIdx !== null && (
                      <div className="subcategorias-panel">
                        {categorias[hoveredCatIdx].subcategorias.map((sub, i) => (
                          <div key={i} className="dropdown-category-block">
                            <div className="dropdown-category-title">{sub.titulo}</div>
                            <ul className="dropdown-category-list">
                              {sub.items.map((item, j) => (
                                <li key={j}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="dropdown-category-block ver-todos">
                          <div className="dropdown-category-title"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mega-dropdown-right">
                    {/* Aquí puedes agregar banners, imágenes, etc */}
                  </div>
                </div>
              )}
            </li>
            <li>TECNOLOGÍA</li>
            <li>FREIDORAS</li>
            <li>CAFETERAS</li>
            <li>HORNITOS</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
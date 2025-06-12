import { Link } from "react-router-dom";

function Breadcrumbs({ categorias = [], producto }) {
  // Construye el array de rutas: Inicio > ...categorías... > Producto actual (sin link)
  const rutas = [
    { nombre: "Inicio", url: "/" },
    ...categorias,
    { nombre: producto?.nombre, url: null }
  ];

  return (
    <nav className="breadcrumbs">
      {rutas.map((ruta, idx) => (
        <span key={idx}>
          {ruta.url
            ? <Link to={ruta.url}>{ruta.nombre}</Link>
            : <span>{ruta.nombre}</span>
          }
          {idx < rutas.length - 1 && <span className="breadcrumbs-sep"> &gt; </span>}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
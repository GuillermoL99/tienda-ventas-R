import { Link } from "react-router-dom";
// Estructura de categorías y subcategorías
const categorias = [
  {
    nombre: "Línea Blanca y Climatización",
    ruta: "/c1",
    subcategorias: [
      { titulo: "Refrigeración", items: ["Freezers", "Heladeras"] },
      { titulo: "Lavado y Secado", items: ["Lavarropas", "Secarropas", "Lavavajillas"] },
      { titulo: "Climatización", items: ["Aires acondicionados", "Calefactor- estufas", "Calefones", "Climatizadores", "Termotanques", "Ventiladores"] },
      { titulo: "Cocina", items: ["Microondas"] }
    ]
  },
  {
    nombre: "Electrodomésticos de Cocina y Hogar",
    ruta: "/c2",
    subcategorias: [
      { titulo: "Cocina", items: ["Procesadoras", "Batidoras", "Mixers", "Sandwicheras"] },
      { titulo: "Limpieza", items: ["Aspiradoras", "Planchas"] }
    ]
  },
  {
    nombre: "Muebles y Equipamiento para el Hogar",
    ruta: "/c3",
    subcategorias: [
      { titulo: "Muebles", items: ["Sillas", "Mesas", "Estanterías"] },
      { titulo: "Organización", items: ["Roperos", "Zapateros"] }
    ]
  },
  {
    nombre: "Descanso y Dormitorio",
    ruta: "/c4",
    subcategorias: [
      { titulo: "Dormitorio", items: ["Colchones", "Almohadas", "Sábanas"] },
      { titulo: "Descanso", items: ["Sommier", "Respaldo"] }
    ]
  },
  {
    nombre: "Tecnología y Electrónica",
    ruta: "/c5",
    subcategorias: [
      { titulo: "Dispositivos", items: ["Celulares", "Tablets", "Laptops"] },
      { titulo: "Accesorios", items: ["Auriculares", "Cargadores"] }
    ]
  },
  {
    nombre: "Herramientas y Equipos Especiales",
    ruta: "/c6",
    subcategorias: [
      { titulo: "Herramientas eléctricas", items: ["Taladros", "Amoladoras"] },
      { titulo: "Equipos", items: ["Soldadoras", "Compresores"] }
    ]
  },
  {
    nombre: "Vehículos y Movilidad",
    ruta: "/c7",
    subcategorias: [
      { titulo: "Movilidad personal", items: ["Bicicletas", "Monopatines"] },
      { titulo: "Vehículos", items: ["Motos", "Autos"] }
    ]
  },
  {
    nombre: "Camping y Ocio",
    ruta: "/c8",
    subcategorias: [
      { titulo: "Camping", items: ["Carpas", "Linternas"] },
      { titulo: "Ocio", items: ["Juegos", "Deportes"] }
    ]
  },
  {
    nombre: "Cuidado Personal y Salud",
    ruta: "/c9",
    subcategorias: [
      { titulo: "Cuidado personal", items: ["Secadores", "Afeitadoras"] },
      { titulo: "Salud", items: ["Termómetros", "Oxímetros"] }
    ]
  }
];

export default categorias;
import React from "react";
import Navbar from "../components/navbar";

function Home() {
  return (
    <>
      <Navbar mostrarInicio={false} />
      {/* ...resto del contenido de Home... */}
      <main>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit labore modi harum nulla at minus similique ex quos magnam! Rerum molestias accusamus hic quas incidunt aut fugit eaque debitis quidem.</p>
      </main>
    </>
  );
}

export default Home;
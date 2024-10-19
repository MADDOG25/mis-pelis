import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";
import { useState } from "react";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>

      {/* Barra de navegacion */}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Pelicula</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section className="content">
        {/*Listado de peliculas */}
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador
          listadoState={listadoState}
          setListadoState={setListadoState}
        />

        <Crear setListadoState={setListadoState} />
      </aside>

      {/* Pie de pagina */}
      <footer className="footer">
        &copy; DevJeffrey Desarrollador Web -
        <a href="https://clubnewgen.vercel.app">Club NewGen</a>
      </footer>
    </div>
  );
}

export default App;

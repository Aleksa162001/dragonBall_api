import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Personajes from "./componentes/Personajes";
import DetallePersonaje from "./componentes/DetallePersonaje";
import BuscarPersonajes from "./componentes/BuscarPersonajes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>DRAGON BALL SUPER</h1>
        <nav>
          <Link to="/personajes">
            <button>Ver Personajes</button>
          </Link>
          <Link to="/buscar">
            <button>Buscar Personajes</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Personajes />}></Route>
          <Route path="/personajes" element={<Personajes />}></Route>
          <Route path="/personajes/:id" element={<DetallePersonaje />}></Route>
          <Route path="/buscar" element={<BuscarPersonajes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

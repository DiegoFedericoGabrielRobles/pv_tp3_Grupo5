import './css/style.css';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Navegador } from './components/Nav';
import { Footer } from './components/Footer';
import { DetalleProyecto } from './components/DetalleProyecto';

import { Dashboard } from './views/Dashboard';
import { ListaProyectos } from './views/ListaProyectos';
import { PerfilUsuario } from './views/PerfilUsuario';

function App() {

  return (
    <div className="layout">
      <Header />
      <Navegador />

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;

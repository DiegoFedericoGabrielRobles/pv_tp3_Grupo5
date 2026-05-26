import './css/style.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { ListaProyectos } from './components/ListaProyectos';

function App() {
  return (
    <main className="layout">
      <Header/>
      <Nav/>
      <ListaProyectos/>
      <Footer/>
    </main>
  );
};

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Adicione Routes e Route
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Home from './pages/home/Home';
import Contato from './components/contato/Contato'; // Importe a página de contato
import Sucesso from './pages/sucesso/Sucesso';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Skills />
            <Projects />
            <Footer />
          </>
        } />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Página de Presentación de Israel</h1>
      <Testimonio
      nombre='Israel Leiva'
      pais='Chile'
      imagen='1'
      cargo='Ingeniero informatico'
      empresa='Microdat'
      testimonio='Soy Israel, ingeniero informatico, dedicado al desarrollo de software web, Me gustan las motos, el deporte, la musica y la animacion.'/>
      <Testimonio
      nombre='Israel Leiva'
      pais='Chile'
      imagen='2'
      cargo='Ingeniero informatico'
      empresa='Microdat'
      testimonio='Soy Israel, ingeniero informatico, dedicado al desarrollo de software web, Me gustan las motos, el deporte, la musica y la animacion.'/>
      <Testimonio
      nombre='Israel Leiva'
      pais='Chile'
      imagen='3'
      cargo='Ingeniero informatico'
      empresa='Microdat'
      testimonio='Soy Israel, ingeniero informatico, dedicado al desarrollo de software web, Me gustan las motos, el deporte, la musica y la animacion.'/>
      </div>
    </div>
  );
}

export default App;

import imagen_0 from './imgs/rey_ataulfo.png';
import imagen_1 from './imgs/rey_recesvinto.png';
import imagen_2 from './imgs/rey_teodorico.png';
import './estilos.css';

function App() {
  let nombre_reyes=["Ataulfo", "Recesvinto", "Teodorico"]

  return (
    <div className="contenedor">
      <div className="caja">
        <img src={imagen_0} />
        <div className="nombre">{nombre_reyes[0]}</div>
      </div>

      <div className="caja">
        <img src={imagen_1} />
        <div className="nombre">{nombre_reyes[1]}</div>
      </div>

      <div className="caja">
        <img src={imagen_2} />
        <div className="nombre">{nombre_reyes[2]}</div>
      </div>
    </div>

    
  
  );
}

export default App;

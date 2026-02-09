import { useState } from 'react';
import Botones from './components/Botones'; 
import Entradas from './components/Entradas';
import Resultado from './components/Resultado';
import Header from './ui/Header'; 
import Footer from './ui/Footer'; 

const App = () => {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacion, setOperacion] = useState("");

  const sumar = () => {
    setResultado(Number(numA) + Number(numB));
    setOperacion("+");
  };

  const resta = () => {
    setResultado(Number(numA) - Number(numB));
    setOperacion("-");
  };

  const multiplicar = () => {
    setResultado(numA * numB);
    setOperacion("*");
  };

  const dividir = () => {
    setResultado(numB !== 0 ? numA / numB : "Error");
    setOperacion("/");
  };

  const limpiar = () => {
  setNumA(0);
  setNumB(0);
  setResultado(0);
  setOperacion("");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      {/* La "Card" de Bootstrap hace que todo parezca una app real */}
      <div className="card shadow-lg p-4" style={{ maxWidth: '450px', borderRadius: '20px' }}>
          <Header /> 
          <Entradas 
            numA={numA} 
            onCambioA={(val) => {
              setNumA(val);
              // Si ya hay una operación seleccionada, recalculamos con el nuevo valor
              if (operacion === "+") setResultado(Number(val) + Number(numB));
              if (operacion === "-") setResultado(Number(val) - Number(numB));
              if (operacion === "*") setResultado(val * numB);
              if (operacion === "/") setResultado(numB !== 0 ? val / numB : "Error");
            }} 
            numB={numB} 
            onCambioB={(val) => {
              setNumB(val);
              if (operacion === "+") setResultado(Number(numA) + Number(val));
              if (operacion === "-") setResultado(Number(numA) - Number(val));
              if (operacion === "*") setResultado(numA * val);
              if (operacion === "/") setResultado(val !== 0 ? numA / val : "Error");
            }} 
          />
          <Botones 
            onSumar={sumar} 
            onRestar={resta} 
            onMultiplicar={multiplicar} 
            onDividir={dividir} 
            operacionActiva={operacion} 
            onLimpiar={limpiar}
          />
          <Resultado valor={resultado} operacion={operacion} />
          <Footer />
      </div>
    </div>
  );
}; 

export default App;
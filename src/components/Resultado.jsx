// src/components/Resultado.jsx
import { Alert } from 'react-bootstrap';

function Resultado(props) {
    if (!props.operacion) {
        return <p className="text-center text-muted mt-4">Elige una operación para ver el resultado</p>;
    }

    const esError = props.valor === "Error";

    // --- ESTA ES LA PARTE QUE FALTA ---
    // Si NO es un error, redondeamos a 2 decimales
    const valorFormateado = !esError && typeof props.valor === 'number' 
        ? parseFloat(props.valor.toFixed(2)) 
        : props.valor;

    return (
        <Alert variant={esError ? "danger" : "success"} className="mt-4 text-center shadow-sm">
            <h4>
                {esError ? "¡Atención!" : "El resultado de la operación es:"}
            </h4>
            {/* Usamos el valor formateado en lugar del original */}
            <h2 className="display-4">
                {valorFormateado}
            </h2>
        </Alert>
    );
}

export default Resultado;
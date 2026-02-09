import { Button } from 'react-bootstrap';

function Botones(props) {
    return (
        <div className="d-flex gap-3 justify-content-center my-4">
            <Button 
                /* Si es la operación activa, ponemos la clase sólida, si no, la de borde */
                className={`rounded-circle shadow-sm ${props.operacionActiva === '+' ? 'btn-granate' : 'btn-outline-granate'}`}
                style={{ width: '50px', height: '50px' }}
                onClick={props.onSumar}> + </Button>
            
            <Button 
                className={`rounded-circle shadow-sm ${props.operacionActiva === '-' ? 'btn-granate' : 'btn-outline-granate'}`}
                style={{ width: '50px', height: '50px' }}
                onClick={props.onRestar}> - </Button>
            
            <Button 
                className={`rounded-circle shadow-sm ${props.operacionActiva === '*' ? 'btn-granate' : 'btn-outline-granate'}`}
                style={{ width: '50px', height: '50px' }}
                onClick={props.onMultiplicar}> x </Button>
            
            <Button 
                className={`rounded-circle shadow-sm ${props.operacionActiva === '/' ? 'btn-granate' : 'btn-outline-granate'}`}
                style={{ width: '50px', height: '50px' }}
                onClick={props.onDividir}> / </Button>
        </div>
    );
}

export default Botones;
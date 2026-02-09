// src/components/Entradas.jsx
import { Form, Row, Col } from 'react-bootstrap';

function Entradas(props) {
    return (
        <Row className="mb-3 justify-content-center">
            <Col md={4}>
                <Form.Label>Número A</Form.Label>
                <Form.Control type="number" value={props.numA} onChange={(e) => props.onCambioA(e.target.value)} />
            </Col>
            <Col md={4}>
                <Form.Label>Número B</Form.Label>
                <Form.Control type="number" value={props.numB} onChange={(e) => props.onCambioB(e.target.value)} />
            </Col>
        </Row>
    );
}

export default Entradas;
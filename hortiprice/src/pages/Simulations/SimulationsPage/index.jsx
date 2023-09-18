import {Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Buttons from "../../../components/Button"
import './Simulations.css'

const Simulations = () =>{
    return (
        <Container className="reports-page">
            <form>
                <h1 className="h1-simulations">Página de Simulações</h1>
               <Row className="row1-simulations">
                    <Col>
                        <Link to='/custoabc'>
                            <Buttons text='Custeio-ABC' customButton= 'button-simulationsabc'/>
                        </Link>
                        <Link to='/custoabsorcao'>
                            <Buttons text='Custeio por Absorção' customButton= 'button-simulationscost'/>
                        </Link>
                    </Col>
                </Row>
                <Row className="row2-simulations">
                    <Col>
                        <Link to='/custovariavel'>
                            <Buttons text='Custeio Variavel' customButton= 'button-simulationunit'/>
                        </Link>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}

export default Simulations
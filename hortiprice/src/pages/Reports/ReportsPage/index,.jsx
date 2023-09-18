import {Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Buttons from "../../../components/Button"
import './Reports.css'

const Reports = () =>{
    return (
        <Container className="reports-page">
            <form>
                <h1 className="h1-reports">Página de Relatórios</h1>
               <Row className="row1-reports">
                    <Col>
                        <Link to='/relatorioabc'>
                            <Buttons text='Custo-ABC' customButton= 'button-reportsabc'/>
                        </Link>
                        <Link to='/relatoriocusto'>
                            <Buttons text='Custo de Produção' customButton= 'button-reportcost'/>
                        </Link>
                    </Col>
                </Row>
                <Row className="row2-reports">
                    <Col>
                        <Link to='/relatoriounitario'>
                            <Buttons text='Custo Unitário' customButton= 'button-reportunit'/>
                        </Link>
                        <Link to='/relatoriototal'>
                            <Buttons text='Total por Custo' customButton= 'button-reporttotal'/>
                        </Link>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}


export default Reports
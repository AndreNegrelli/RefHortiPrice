import {Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Buttons from "../../../components/Button"
import './Forms.css'

const Forms = () =>{
    return (
        <Container className="reports-page">
            <form>
                <h1 className="h1-forms">Página de Cadastros</h1>
               <Row className="row1-forms">
                    <Col>
                        <Link to='/area'>
                            <Buttons text='Àrea' customButton= 'button-formsarea'/>
                        </Link>
                        <Link to='/atividade'>
                            <Buttons text='Atividade' customButton= 'button-formsatividade'/>
                        </Link>
                        <Link to='/categoria'>
                            <Buttons text='Categoria' customButton= 'button-formscategoria'/>
                        </Link>
                        <Link to='/componente'>
                            <Buttons text='Componente' customButton= 'button-formscomponente'/>
                        </Link>
                        <Link to='/custo'>
                            <Buttons text='Custo' customButton= 'button-formscusto'/>
                        </Link>
                        <Link to='/direcionador'>
                            <Buttons text='Direcionador' customButton= 'button-formsdirecionador'/>
                        </Link>
                        <Link to='/produtividade'>
                            <Buttons text='Produtividade' customButton= 'button-formsprodutividade'/>
                        </Link>
                        <Link to='/subcategoria'>
                            <Buttons text='Subcategoria' customButton= 'button-formssubcategoria'/>
                        </Link>
                        <Link to='/tipo'>
                            <Buttons text='Tipo' customButton= 'button-formstipo'/>
                        </Link>
                        <Link to='/unidade'>
                            <Buttons text='Unidade' customButton= 'button-formsunidade'/>
                        </Link>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}


export default Forms
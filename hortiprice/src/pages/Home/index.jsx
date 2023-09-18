import {Col, Container, Row } from "react-bootstrap"
import Buttons from "../../components/Button"
import './Home.css'
import { Link } from "react-router-dom"


const Home = () =>{
    return (
        <Container className="homepage">
            <form>
                <h1 className="h1-home">Bem vindo(a) ao HortiPrice</h1>
               <Row className="row1">
                    <Col>
                        <Link to='/cadastros'>
                            <Buttons text='Cadastros' customButton= 'button-homeregister'/>
                        </Link>
                        <Link to='/simulacoes'>
                            <Buttons text='Simulações' customButton= 'button-homesimulations'/>
                        </Link>
                    </Col>
               </Row>
               <Row className="row2">
                    <Col md={{span: 12}}>
                        <Link to='/relatorios'>
                            <Buttons text='Relatórios' customButton= 'button-homereport'/>
                        </Link>
                    </Col>
               </Row>
            </form>
        </Container>



    )
}


export default Home
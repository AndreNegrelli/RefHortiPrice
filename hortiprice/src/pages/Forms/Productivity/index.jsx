import { Container, Row, Col } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./ProductivityForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductivityForm = () => {

    const teste = ["teste1", "teste2"];
    
    return (
        <section className="productivity-form">
            <Container>
                 <form>
                    <h2>Cadastro de produtividade</h2>
                    <Row>  
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="valor-produtividade"  label="Valor" placeholder="Valor." /></Col>
                    </Row>
                    <Row>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="mes-componente"  label="Mês" placeholder="Mês." /></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="ano-componente"  label="Ano" placeholder="Ano." /></Col>
                    </Row>
                    <DropdownLists inputClassName="tipo-produtividade" label="Tipo" itens={teste}/>
                    <Buttons  customButton = "button-productivityform" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default ProductivityForm
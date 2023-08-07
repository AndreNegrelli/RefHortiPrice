import { Container, Row, Col } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./ComponentForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentForm = () => {

    const teste = ["teste1", "teste2"];
    
    return (
        <section className="component-form">
            <Container className="container">
                 <form>
                    <h2>Cadastre um novo componente</h2>
                    <Row>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="descrição-componente"  label="Descrição" placeholder="Descrição." /></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="quantidade-componente"  label="Quantidade" placeholder="Quantidade."/></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="valor-componente"  label="Valor" placeholder="Valor." /></Col>
                    </Row>
                    <Row>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="mes-componente"  label="Mês" placeholder="Mês." /></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="ano-componente"  label="Ano" placeholder="Ano." /></Col>
                    </Row>
                    <Row>
                        <Col><DropdownLists inputClassName="unidade-componente" label="Unidade" itens={teste}/></Col>
                        <Col><DropdownLists inputClassName="tipo-componente" label="Tipo" itens={teste}/></Col>
                    </Row>
                    <Row>
                        <Col><DropdownLists inputClassName="custo-componente" label="Custo"itens={teste} /></Col>
                        <Col><DropdownLists inputClassName="classificação-componente" label="Classificação" itens={teste}/></Col>
                    </Row>
                    <Buttons  customButton = "button-componentform" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default ComponentForm
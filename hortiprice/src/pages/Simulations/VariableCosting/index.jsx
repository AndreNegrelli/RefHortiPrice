import { Container, Row, Col } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./VariableCosting.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const VariableCosting = () => {

    const teste = ["teste1", "teste2"];
    
    return (
        <section className="variable-costing">
            <Container>
            <form>
                <h2>Custeio Variavel</h2>
                    <DropdownLists inputClassName="tipo-variable" label="Custo" itens={teste}/>
                    <Row>
                        <Col><DropdownLists inputClassName="mês-variable" label="Mês" itens={teste}/></Col>
                        <Col><DropdownLists inputClassName="ano-variable" label="Ano" itens={teste}/></Col>
                    </Row>
                    <TextFields inputLength = {20} isRequired = {true} inputClassName="descricao-variable"  label=" " placeholder=" "/>
                    <Buttons  customButton = "button-variablecosting" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default VariableCosting
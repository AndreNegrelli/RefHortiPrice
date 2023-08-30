import { Container, Row, Col } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./AbsorptionCosting.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const AbsortionCosting = () => {

    const teste = ["teste1", "teste2"];
    
    return (
            <Container className="absortion-costing">
            <form>
                <h2>Custeio por absorção</h2>
                    <DropdownLists inputClassName="tipo-absorcao" label="Custo" itens={teste}/>
                    <Row>
                        <Col><DropdownLists inputClassName="mês-absorcao" label="Mês" itens={teste}/></Col>
                        <Col><DropdownLists inputClassName="ano-absorcao" label="Ano" itens={teste}/></Col>
                    </Row>
                    <TextFields inputLength = {20} isRequired = {true} inputClassName="descricao-absorcao"  label=" " placeholder=" "/>
                    <Buttons  customButton = "button-absortioncosting" text="Inserir"  />
                </form>
            </Container>
    )
}

export default AbsortionCosting
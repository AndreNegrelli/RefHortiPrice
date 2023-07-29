import { Container, Row, Col } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./ActivityForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const ActivityForm = () => {

    const teste = ["teste1", "teste2"];
    
    return (
        <section className="activity-form">
            <Container>
                 <form>
                    <h2>Cadastre uma nova atividade</h2>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="descrição-atividade"  label="Descrição" placeholder="Descrição." /></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="quantidade-atividade"  label="Quantidade" placeholder="Quantidade."/></Col>
                    <Row>
                        <Col><DropdownLists inputClassName="custo-atividade" label="Custo" itens={teste}/></Col>
                        <Col><DropdownLists inputClassName="direcionador-atividade" label="Direcionador" itens={teste}/></Col>
                        <Col><DropdownLists inputClassName="Unidade-atividade" label="Unidade" itens={teste}/></Col>
                    </Row>
                    <Buttons  customButton = "button-activityform" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default ActivityForm
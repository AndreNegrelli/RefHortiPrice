import { Container, Row, Col } from "react-bootstrap";
import Buttons from "../../../components/Button";
import DropdownLists from "../../../components/DropdownLists";
import TextFields from "../../../components/TextFields";
import "./CostingABC.css";
import "bootstrap/dist/css/bootstrap.min.css";


const CostingABC = () => {
  const teste = ["teste1", "teste2"];
 
  return (
      <Container className="costing-abc">
        <form>
          <h2>Custeio ABC</h2>
          <DropdownLists inputClassName="tipo-abc" label="Custo"itens={teste}/>
          <Row>
            <Col><DropdownLists inputClassName="mês-abc" label="Mês" itens={teste}/></Col>
            <Col><DropdownLists inputClassName="ano-abc" label="Ano" itens={teste}/></Col>
          </Row>
          <TextFields inputLength={20} isRequired={true} inputClassName="descricao-abc" label=" " placeholder=" "/>
          <Buttons customButton="button-costingabc" text="Inserir"/>
        </form>
      </Container>
  );
};

export default CostingABC;

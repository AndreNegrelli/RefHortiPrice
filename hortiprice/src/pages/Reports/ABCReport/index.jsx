import { Container } from "react-bootstrap";
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import "./ABCReport.css"

const ABCReport = () => {

    const teste = ["teste1", "teste2"];

    return (
        <section className="abc-report">
            <Container>
                <form>
                    <h2>Relatorio Custo ABC</h2>
                    <DropdownLists inputClassName="relatorio-abc" label="Tipo" itens={teste}/>
                    <Buttons  customButton = "button-abcreport" text="Consultar" />
                </form>
            </Container>
        </section>
    )
}

export default ABCReport
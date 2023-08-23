import { Container } from "react-bootstrap";
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import "./UnitCostReport.css"

const UnitCostReport = () => {

    const teste = ["Escolha sua opção", "teste2"];

    return (
        <section className="cost-unit">
            <Container>
                <form>
                    <h2>Relatorio Custo Unitario</h2>
                    <DropdownLists inputClassName="relatorio-custounitario" label="Tipo" itens={teste}/>
                    <Buttons  customButton = "button-costunit" text="Consultar" />
                </form>
            </Container>
        </section>
    )
}

export default UnitCostReport
import { Container } from "react-bootstrap";
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import "./CostReport.css"

const CostReport = () => {

    const teste = ["Escolha sua opção", "teste2"];

    return (
        <section className="cost-report">
            <Container>
                <form>
                    <h2>Relatório de Custo</h2>
                    <DropdownLists inputClassName="relatorio-custo" label="Tipo" itens={teste}/>
                    <Buttons  customButton = "button-costreport" text="Consultar" />
                </form>
            </Container>
        </section>
    )
}

export default CostReport
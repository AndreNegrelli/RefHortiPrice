import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import "./CostReport.css"

const CostReport = () => {

    const teste = ["teste1", "teste2"];

    return (
        <section className="cost-report">
            <form>
                <h2>Relatório de Custo</h2>
                <DropdownLists inputClassName="relatorio-custo" label="Tipo" itens={teste}/>
                <Buttons  customButton = "button-costreport" text="Consultar" />
            </form>
        </section>
    )
}

export default CostReport
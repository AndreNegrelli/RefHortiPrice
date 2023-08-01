import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import "./UnitCostReport.css"

const UnitCostReport = () => {

    const teste = ["teste1", "teste2"];

    return (
        <section className="cost-unit">
            <form>
                <h2>Relatorio Custo Unitario</h2>
                <DropdownLists inputClassName="relatorio-custounitario" label="Tipo" itens={teste}/>
                <Buttons  customButton = "button-costunit" text="Consultar" />
            </form>
        </section>
    )
}

export default UnitCostReport
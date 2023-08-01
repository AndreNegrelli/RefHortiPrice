import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import "./TotalsReport.css"

const TotalsReport = () => {

    const teste = ["teste1", "teste2"];

    return (
        <section className="totals-report">
            <form>
                <h2>Relatório Totais por Custo</h2>
                <DropdownLists inputClassName="relatorio-total" label="Tipo" itens={teste}/>
                <Buttons  customButton = "button-totalreport" text="Consultar" />
            </form>
        </section>
    )
}

export default TotalsReport
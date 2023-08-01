import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "../../pages/Forms/RegisterForm";
import LoginForm from "../../pages/Forms/LoginForm";
import ContactForm from "../../pages/Forms/ContactForm";
import AreaForm from "../../pages/Forms/AreaForm";
import CategoryForm from "../../pages/Forms/CategoryForm";
import SubcategoryForm from "../../pages/Forms/SubcategoryForm";
import CostForm from "../../pages/Forms/CostForm";
import TypeForm from "../../pages/Forms/TypeForm";
import NumberForm from "../../pages/Forms/NumberForm";
import ComponentForm from "../../pages/Forms/ComponentForm";
import ProductivityForm from "../../pages/Forms/Productivity";
import RedirectorForm from "../../pages/Forms/RedirectorForm";
import ActivityForm from "../../pages/Forms/ActivityForm";
import CostingABC from "../../pages/Simulations/CostingABC";
import AbsortionCosting from "../../pages/Simulations/AbsorptionCosting";
import VariableCosting from "../../pages/Simulations/VariableCosting";
import CostReport from "../../pages/Reports/CostReport";
import UnitCostReport from "../../pages/Reports/UnitCostReport";
import ABCReport from "../../pages/Reports/ABCReport";
import TotalsReport from "../../pages/Reports/TotalsReport";

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = {<RegisterForm/>}  path="/" exact/>
                <Route element = {<LoginForm/>} path="/login"/>
                <Route element = {<ContactForm/>} path="/contato"/>
                <Route element = {<AreaForm/>} path="/area"/>
                <Route element = {<CategoryForm/>} path="/categoria"/>
                <Route element = {<SubcategoryForm/>} path="/subcategoria"/>
                <Route element = {<CostForm/>} path="/custo"/>
                <Route element = {<TypeForm/>} path="/tipo"/>
                <Route element = {<NumberForm/>} path="/unidade"/>
                <Route element = {<ComponentForm/>} path="/componente"/>
                <Route element = {<ProductivityForm/>} path="/produtividade"/>
                <Route element = {<RedirectorForm/>} path="/direcionador"/>
                <Route element = {<ActivityForm/>} path="/atividade"/>
                <Route element = {<CostingABC/>} path="/custo-abc"/>
                <Route element = {<AbsortionCosting/>} path="/custo-absorcao"/>
                <Route element = {<VariableCosting/>} path="/custo-variavel"/>
                <Route element = {<CostReport/>} path="/relatorio-custo"/>
                <Route element = {<UnitCostReport/>} path="/relatorio-unitario"/>
                <Route element = {<ABCReport/>} path="/relatorio-abc"/>
                <Route element = {<TotalsReport/>} path="/relatorio-total"/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routing;
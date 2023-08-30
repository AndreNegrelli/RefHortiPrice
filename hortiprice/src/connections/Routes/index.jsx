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
import ForgotPasswordForm from "../../pages/Forms/ForgotPasswordForm";
import ChangePasswordForm from "../../pages/Forms/ChangePasswordForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Help from "../../pages/Help";
import Home from "../../pages/Home";
import Reports from "../../pages/Reports/ReportsPage/index,";
import Simulations from "../../pages/Simulations/SimulationsPage";
import Forms from "../../pages/Forms/FormsPage";



const Routing = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route element = {<RegisterForm/>}  path="/registro" exact/>
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
                <Route element = {<CostingABC/>} path="/custoabc"/>
                <Route element = {<AbsortionCosting/>} path="/custoabsorcao"/>
                <Route element = {<VariableCosting/>} path="/custovariavel"/>
                <Route element = {<CostReport/>} path="/relatoriocusto"/>
                <Route element = {<UnitCostReport/>} path="/relatoriounitario"/>
                <Route element = {<ABCReport/>} path="/relatorioabc"/>
                <Route element = {<TotalsReport/>} path="/relatoriototal"/>
                <Route element = {<ForgotPasswordForm/>} path="/esqueceusenha"/>
                <Route element = {<ChangePasswordForm/>} path="/mudarsenha"/>
                <Route element = {<Help/>} path="/ajuda"/>
                <Route element = {<Home/>} path="/home"/>
                <Route element = {<Reports/>} path="/relatorios"/>
                <Route element = {<Simulations/>} path="/simulacoes"/>
                <Route element = {<Forms/>} path="/cadastros"/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routing;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "../../pages/Forms/RegisterForm";
import LoginForm from "../../pages/Forms/LoginForm";
import ContactForm from "../../pages/Forms/ContactForm";
import AreaForm from "../../pages/Forms/AreaForm";
import CategoryForm from "../../pages/Forms/CategoryForm";
import SubcategoryForm from "../../pages/Forms/SubcategoryForm";
import CostForm from "../../pages/Forms/CostForm";
import TypeForm from "../../pages/Forms/TypeForm";

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
            </Routes>
        </BrowserRouter>
    )
}
export default Routing;
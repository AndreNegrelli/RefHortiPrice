import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "../../pages/Forms/RegisterForm";
import LoginForm from "../../pages/Forms/LoginForm";
import ContactForm from "../../pages/Forms/ContactForm";
import AreaForm from "../../pages/Forms/AreaForm";
import CategoryForm from "../../pages/Forms/CategoryForm";

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = {<RegisterForm/>}  path="/" exact/>
                <Route element = {<LoginForm/>} path="/login"/>
                <Route element = {<ContactForm/>} path="/contato"/>
                <Route element = {<AreaForm/>} path="/area"/>
                <Route element = {<CategoryForm/>} path="/categoria"/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routing;
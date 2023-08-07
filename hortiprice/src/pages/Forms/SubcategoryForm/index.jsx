import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./SubcategoryForm.css"

const SubcategoryForm = () => {
    return (
        <section className="subcategory-form">
            <Container>
                <form>
                    <h2>Cadastre novas subcategorias</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="subcategoria"  label="Subcategoria" placeholder="Digite aqui a nova subcategoria." />
                    <Buttons  customButton = "button-subcategory" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default SubcategoryForm
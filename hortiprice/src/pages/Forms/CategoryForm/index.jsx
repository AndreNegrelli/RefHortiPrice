import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./CategoryForm.css"

const CategoryForm = () => {
    return (
        <section className="category-form">
            <Container>
                <form>
                    <h2>Cadastre novas categorias</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="categoria"  label="Categoria" placeholder="Digite aqui a nova categoria." />
                    <Buttons  customButton = "button-category" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default CategoryForm
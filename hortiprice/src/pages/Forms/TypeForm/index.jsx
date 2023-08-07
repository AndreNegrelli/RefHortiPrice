import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./TypeForm.css"

const TypeForm = () => {

    const teste = ["teste1", "teste2"];
    

    return (
        <section className="type-form">
            <Container>
                <form>
                    <h2>Cadastre um novo tipo</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="tipo"  label="Tipo" placeholder="Descrição do tipo." />
                    <DropdownLists inputClassName="areaType" label="Área" itens={teste}/>
                    <DropdownLists inputClassName="categoryType" label="Categoria"itens={teste} />
                    <DropdownLists inputClassName="subcategoryType" label="Subcategoria" itens={teste}/>
                    <Buttons  customButton = "button-typeform" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default TypeForm
import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./CostForm.css"

const CostForm = () => {
    return (
        <section className="cost-form">
            <Container>
                <form>
                    <h2>Cadastre</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="custo"  label="Custo" placeholder="Digite aqui um novo custo." />
                    <Buttons  customButton = "button-cost" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default CostForm
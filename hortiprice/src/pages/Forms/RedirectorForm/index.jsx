import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./RedirectorForm.css"

const RedirectorForm = () => {
    return (
        <section className="redirector-form">
            <Container>
                <form>
                    <h2>Campo do direcionador</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="direcionador"  label="Direcionador" placeholder="Descrição." />
                    <Buttons  customButton = "button-redirector" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default RedirectorForm
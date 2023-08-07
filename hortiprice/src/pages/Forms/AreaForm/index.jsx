import {Container} from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./AreaForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const AreaForm = () => {
    return (
        <section className="area-form">
            <Container>
                <form>
                    <h2>Cadastre novas areas</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="area"  label="Area" placeholder="Digite aqui a nova area." />
                    <Buttons  customButton = "button-area" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default AreaForm
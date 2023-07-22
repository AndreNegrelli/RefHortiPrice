import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./AreaForm.css"

const AreaForm = () => {
    return (
        <section className="area-form">
            <form>
                <h2>Cadastre novas areas</h2>
                <TextFields inputLength = {15} isRequired = {true} inputClassName="area"  label="Area" placeholder="Digite aqui a nova area." />
                <Buttons  customButton = "button-area" text="Inserir"  />
            </form>
        </section>
    )
}

export default AreaForm
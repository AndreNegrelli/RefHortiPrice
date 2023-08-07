import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./ChangePassword.css"

const ChangePasswordForm = () => {
    return (
        <section className="changepassword-form">
            <Container>
                <form>
                    <h2>Digite sua nova senha</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="senha-changep"  label="Senha" placeholder="Digite sua nova senha." />
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="confirmasenha-changep"  label="Confirmar senha" placeholder="Digite sua nova senha novamente." />
                    <Buttons  customButton = "button-changepassword" text="Mudar"  />
                </form>
            </Container>
        </section>
    )
}

export default ChangePasswordForm
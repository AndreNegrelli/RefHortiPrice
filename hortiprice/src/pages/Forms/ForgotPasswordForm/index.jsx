import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./ForgotPassword.css"

const ForgotPasswordForm = () => {
    return (
        <section className="forgotpassword-form">
            <Container>
                <form>
                    <h2>Digite seu e-mail para trocar sua senha</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="email-forgotp"  label="E-mail" placeholder="Digite aqui seu e-mail." />
                    <Buttons  customButton = "button-forgotpassword" text="Enviar"  />
                </form>
            </Container>
        </section>
    )
}

export default ForgotPasswordForm
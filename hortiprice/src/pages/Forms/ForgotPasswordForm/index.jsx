import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./ForgotPassword.css"
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const ForgotPasswordForm = () => {

    const [email, setEmail] = useState("");

    async function esqueceuSenha(e) {
      e.preventDefault();
      await addDoc(collection(db, "esqueceusenha"), {
        email: email,
      })
        .then(() => {
          setEmail("");
        })
        .catch((error) => {});
    }

    return (
        <section className="forgotpassword-form">
            <Container>
                <form onSubmit={esqueceuSenha}>
                    <h2>Digite seu e-mail para trocar sua senha</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="email-forgotp"  label="E-mail" placeholder="Digite aqui seu e-mail." 
                    value={email} setter={setEmail} />
                    <Buttons  emailmButton = "button-forgotpassword" text="Enviar" funcaoBotao ={esqueceuSenha} />
                </form>
            </Container>
        </section>
    )
}

export default ForgotPasswordForm
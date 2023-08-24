import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./ChangePassword.css"
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const ChangePasswordForm = () => {

    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")
   

    async function cadastrarCategoria(e){
        e.preventDefault()
        await addDoc(collection(db, "formulariomudasenha"), {
           senha: senha,
           confirmaSenha: confirmaSenha
        })
        .then(() => {
            setSenha("")
            setConfirmaSenha("")
        })
        .catch((error) => {

        })
    }

    return (
        <section className="changepassword-form">
            <Container>
                <form onSubmit={cadastrarCategoria}>
                    <h2>Digite sua nova senha</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="senha-changep"  label="Senha" placeholder="Digite sua nova senha." 
                    value = {senha} setter = {setSenha}/>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="confirmasenha-changep"  label="Confirmar senha" placeholder="Digite sua nova senha novamente." 
                    value = {confirmaSenha} setter = {setConfirmaSenha}/>
                    <Buttons  customButton = "button-changepassword" text="Mudar" funcaoBotao = {cadastrarCategoria} />
                </form>
            </Container>
        </section>
    )
}

export default ChangePasswordForm
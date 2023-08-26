import "./ContactForm.css";
import Buttons from '../../../components/Button';
import TextFields from '../../../components/TextFields';
import { Container } from "react-bootstrap";
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const ContactForm = () => {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")
 

   

    async function Contato(e){
        e.preventDefault()
        await addDoc(collection(db, "contato"), {
           nome: nome,
           sobrenome: sobrenome,
           email: email,
           mensagem: mensagem,
        })
        .then(() => {
            setNome("")
            setSobrenome("")
            setEmail("")
            setMensagem("")
        })
        .catch((error) => {

        })
    }
    return (
       <section className='contact-form'>
        <Container>
        <form onSubmit={Contato}>
            <h2>Preencha com seus dados para entrar em contato</h2>
            <TextFields inputLength = {15} isRequired = {true} inputClassName="nome"  label="Nome" placeholder="Digite seu nome."
            value={nome} setter={setNome}  onlyLetters />
            <TextFields inputLength = {15} isRequired = {true} inputClassName="sobrenome" label ="Sobrenome" placeholder="Digite seu sobrenome."
            value={sobrenome} setter={setSobrenome} onlyLetters />
            <TextFields inputLength = {50} isRequired = {true} inputClassName="email" label="E-mail" placeholder="Digite seu E-mail."
            value={email} setter={setEmail} />
            <TextFields inputLength = {100} isRequired = {true} inputClassName="mensagem" label="Mensagem" placeholder="Escreva sua mensagem"
            value={mensagem} setter={setMensagem}  />
            <Buttons customButton="button-contato" text = "Enviar" funcaoBotao={Contato}/>
        </form>

        </Container>
        
       </section>
    )

}

export default ContactForm
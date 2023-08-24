import {Container} from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./AreaForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const AreaForm = () => {
    const [descricao, setDescricao] = useState("")

    async function cadastrarArea(e){
        e.preventDefault()
        await addDoc(collection(db, "area"), {
            descricao: descricao
        })
        .then(() => {
            setDescricao("")
        })
        .catch((error) => {

        })
    }

    return (
        <section className="area-form">
            <Container>
                <form onSubmit={cadastrarArea}>
                    <h2>Cadastre novas areas</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="area"  label="Area" placeholder="Digite aqui a nova area." 
                     setter = {setDescricao} value = {descricao}/>
                    <Buttons  customButton = "button-area" text="Inserir" funcaoBotao = {cadastrarArea}  />
                </form>
            </Container>
        </section>
    )
}

export default AreaForm
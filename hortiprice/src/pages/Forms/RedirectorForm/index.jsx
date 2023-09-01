import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./RedirectorForm.css"
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const RedirectorForm = () => {

    const [direcionador, setDirecionador] = useState("");

    async function cadastrarDirecionador(e) {
      e.preventDefault();
      await addDoc(collection(db, "direcionador"), {
       
        direcionador: direcionador,
      })
        .then(() => {
          setDirecionador("")
        })
        .catch((error) => {});
    }

    return (
        <section className="redirector-form">
            <Container>
                <form onSubmit={cadastrarDirecionador}>
                    <h2>Campo do direcionador</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="direcionador"  label="Direcionador" placeholder="Descrição."
                    value={direcionador} setter={setDirecionador} onlyLetters />
                    <Buttons  customButton = "button-redirector" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default RedirectorForm
import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./CostForm.css"
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const CostForm = () => {
     const [custo, setCusto] = useState("");

     async function cadastrarCusto(e) {
       e.preventDefault();
       await addDoc(collection(db, "custo"), {
         custo: custo,
       })
         .then(() => {
           setCusto("");
         })
         .catch((error) => {});
     }

    return (
        <section className="cost-form">
            <Container>
                <form onSubmit={cadastrarCusto}>
                    <h2>Cadastre</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="custo"  label="Custo" placeholder="Digite aqui um novo custo." 
                    value ={custo} setter={setCusto} />
                    <Buttons  customButton = "button-cost" text="Inserir"  />
                </form>
            </Container>
        </section>
    )
}

export default CostForm
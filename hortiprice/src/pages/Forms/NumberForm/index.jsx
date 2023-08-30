import './NumberForm.css'
import Buttons from '../../../components/Button';
import TextFields from '../../../components/TextFields';
import { Container } from 'react-bootstrap';
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const NumberForm = () => {
    const [unidade, setUnidade] = useState("");

    async function cadastrarUnidade(e) {
      e.preventDefault();
      await addDoc(collection(db, "cadastrounidade"), {
        unidade: unidade,
      })
        .then(() => {
          setUnidade("");
        })
        .catch((error) => {});
    }

    return (
       <section className='number-form'>
            <Container>
                <form onSubmit={cadastrarUnidade}>
                    <h2>Cadastro de unidades</h2>
                    <TextFields inputLength = {30} isRequired={true} inputClassName="unidade" label="Unidade" placeholder="Descrição." 
                    value ={unidade} setter={setUnidade} onlyLetters />
                    <Buttons customButton="button-number" text = "Inserir" funcaoBotao ={cadastrarUnidade}/>
                </form>
            </Container>
       </section>
    )

}

export default NumberForm
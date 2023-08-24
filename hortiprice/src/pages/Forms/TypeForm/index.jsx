import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./TypeForm.css"
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const TypeForm = () => {

    const teste = ["teste1", "teste2"];
    const [tipo, setTipo] = useState("");

    async function cadastrarTipo(e) {
      e.preventDefault();
      await addDoc(collection(db, "cadastrotipo"), {
        tipo: tipo,
      })
        .then(() => {
          setTipo("");
        })
        .catch((error) => {});
    }
    

    return (
        <section className="type-form">
            <Container>
                <form onSubmit={cadastrarTipo}>
                    <h2>Cadastre um novo tipo</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="tipo"  label="Tipo" placeholder="Descrição do tipo."
                    value={tipo} setter={setTipo} />
                    <DropdownLists inputClassName="areaType" label="Área" itens={teste}/>
                    <DropdownLists inputClassName="categoryType" label="Categoria"itens={teste} />
                    <DropdownLists inputClassName="subcategoryType" label="tipo" itens={teste}/>
                    <Buttons  customButton = "button-typeform" text="Inserir" funcaoBotao={cadastrarTipo}  />
                </form>
            </Container>
        </section>
    )
}

export default TypeForm
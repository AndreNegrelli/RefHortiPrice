import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./SubcategoryForm.css"
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const SubcategoryForm = () => {
    const [subcategoria, setSubcategoria] = useState("");

    async function cadastrarSubcategoria(e) {
      e.preventDefault();
      await addDoc(collection(db, "cadastrosubcategoria"), {
        subcategoria: subcategoria,
      })
        .then(() => {
          setSubcategoria("");
        })
        .catch((error) => {});
    }

    return (
        <section className="subcategory-form">
            <Container>
                <form onSubmit={cadastrarSubcategoria}>
                    <h2>Cadastre novas subcategorias</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="subcategoria"  label="Subcategoria" placeholder="Digite aqui a nova subcategoria." 
                    value={subcategoria} setter={setSubcategoria} onlyLetters />
                    <Buttons  customButton = "button-subcategory" text="Inserir" funcaoBotao={cadastrarSubcategoria}  />
                </form>
            </Container>
        </section>
    )
}

export default SubcategoryForm
import { Container } from "react-bootstrap"
import Buttons from "../../../components/Button"
import TextFields from "../../../components/TextFields"
import "./CategoryForm.css"
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const CategoryForm = () => {

    const [categoria, setCategoria] = useState("")
   

    async function cadastrarCategoria(e){
        e.preventDefault()
        await addDoc(collection(db, "categoria"), {
           categoria: categoria
        })
        .then(() => {
            setCategoria("")
        })
        .catch((error) => {

        })
    }

    return (
        <section className="category-form">
            <Container>
                <form>
                    <h2>Cadastre novas categorias</h2>
                    <TextFields inputLength = {15} isRequired = {true} inputClassName="categoria"  label="Categoria" placeholder="Digite aqui a nova categoria." 
                    value ={categoria} setter = {setCategoria}/>
                    <Buttons  customButton = "button-category" text="Inserir" funcaoBotao = {cadastrarCategoria}  />
                </form>
            </Container>
        </section>
    )
}

export default CategoryForm
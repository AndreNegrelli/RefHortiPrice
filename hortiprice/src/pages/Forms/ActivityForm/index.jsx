import { Container, Row, Col } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./ActivityForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const ActivityForm = () => {

    const teste = ["teste1", "teste2"];
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState("")

    async function cadastrarAtividade(e){
        e.preventDefault()
        await addDoc(collection(db, "atividade"), {
            descricao: descricao,
            quantidade: quantidade
        })
        .then(() => {
            setDescricao("")
            setQuantidade("")
        })
        .catch((error) => {

        })
    }
    
    return (
        <section className="activity-form">
            <Container>
                 <form onSubmit={cadastrarAtividade}>
                    <h2>Cadastre uma nova atividade</h2>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="descrição-atividade"  label="Descrição" placeholder="Descrição."
                        value = {descricao} setter = {setDescricao} /></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="quantidade-atividade"  label="Quantidade" placeholder="Quantidade."
                         value = {quantidade} setter ={setQuantidade}/></Col>
                    <Row>
                        <Col><DropdownLists inputClassName="custo-atividade" label="Custo" itens={teste}/></Col>
                        <Col><DropdownLists inputClassName="direcionador-atividade" label="Direcionador" itens={teste}/></Col>
                        <Col><DropdownLists inputClassName="Unidade-atividade" label="Unidade" itens={teste}/></Col>
                    </Row>
                    <Buttons  customButton = "button-activityform" text="Inserir" funcaoBotao = {cadastrarAtividade}  />
                </form>
            </Container>
        </section>
    )
}

export default ActivityForm
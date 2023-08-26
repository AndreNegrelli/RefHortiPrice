import { Container, Row, Col } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./ComponentForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const ComponentForm = () => {

    const teste = ["teste1", "teste2"];
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [valor, setValor] = useState("")
    const [mes, setMes] = useState("")
    const [ano, setAno] = useState("")

   

    async function cadastrarComponente(e){
        e.preventDefault()
        await addDoc(collection(db, "cadastrarcomponente"), {
           descricao: descricao,
           quantidade: quantidade,
           valor: valor,
           mes: mes,
           ano: ano
        })
        .then(() => {
            setDescricao("")
            setQuantidade("")
            setValor("")
            setMes("")
            setAno("")
        })
        .catch((error) => {

        })
    }

    
    return (
        <section className="component-form">
            <Container className="container">
                 <form onSubmit={cadastrarComponente}>
                    <h2>Cadastre um novo componente</h2>
                    <Row>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="descrição-componente"  label="Descrição" placeholder="Descrição."
                        value ={descricao} setter={setDescricao} onlyLetters /></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="quantidade-componente"  label="Quantidade" placeholder="Quantidade."
                        value={quantidade} setter={setQuantidade} onlyNumbers /></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="valor-componente"  label="Valor" placeholder="Valor."
                        value={valor} setter={setValor} onlyNumbers /></Col>
                    </Row>
                    <Row>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="mes-componente"  label="Mês" placeholder="Mês."
                        value={mes} setter={setMes}  onlyLetters /></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="ano-componente"  label="Ano" placeholder="Ano."
                        value={ano} setter={setAno}  onlyNumbers /></Col>
                    </Row>
                    <Row>
                        <Col><DropdownLists inputClassName="unidade-componente" label="Unidade" itens={teste}/></Col>
                        <Col><DropdownLists inputClassName="tipo-componente" label="Tipo" itens={teste}/></Col>
                    </Row>
                    <Row>
                        <Col><DropdownLists inputClassName="custo-componente" label="Custo"itens={teste} /></Col>
                        <Col><DropdownLists inputClassName="classificação-componente" label="Classificação" itens={teste}/></Col>
                    </Row>
                    <Buttons  customButton = "button-componentform" text="Inserir" funcaoBotao={cadastrarComponente} />
                </form>
            </Container>
        </section>
    )
}

export default ComponentForm
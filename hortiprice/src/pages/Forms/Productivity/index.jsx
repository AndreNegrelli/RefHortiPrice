import { Container, Row, Col } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./ProductivityForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const ProductivityForm = () => {
    const teste = ["teste1", "teste2"];
    const [valor, setValor] = useState("");
    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");

    async function cadastrarProdutividade(e) {
      e.preventDefault();
      await addDoc(collection(db, "cadastroprodutividade"), {
        valor: valor,
        mes: mes,
        ano: ano,
      })
        .then(() => {
          setValor("");
          setMes("")
          setAno("")
        })
        .catch((error) => {});
    }

    
    return (
        <section className="productivity-form">
            <Container>
                 <form onSubmit={cadastrarProdutividade}>
                    <h2>Cadastro de produtividade</h2>
                    <Row>  
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="valor-produtividade"  label="Valor" placeholder="Valor."
                        value={valor} setter={setValor} onlyNumbers /></Col>
                    </Row>
                    <Row>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="mes-componente"  label="Mês" placeholder="Mês."
                        value={mes} setter={setMes} onlyLetters /></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="ano-componente"  label="Ano" placeholder="Ano."
                        value={ano} setter={setAno} onlyNumbers /></Col>
                    </Row>
                    <DropdownLists inputClassName="tipo-produtividade" label="Tipo" itens={teste}/>
                    <Buttons  customButton = "button-productivityform" text="Inserir" funcaoBotao={cadastrarProdutividade}  />
                </form>
            </Container>
        </section>
    )
}

export default ProductivityForm
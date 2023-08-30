import { Container, Row, Col } from "react-bootstrap"
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import TextFields from "../../../components/TextFields"
import "./ActivityForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../../firebaseConnection";
import {addDoc, collection, getDocs} from 'firebase/firestore'
import { useState } from "react";

const ActivityForm = () => {

    const [custo, setCusto] = useState("")

    async function searchCusto(custo, e) {
        e.preventDefault();
        const collectionRef = collection(db, custo);
        await getDocs(collectionRef)
          .then((snapshot) => {
            let lista = [];
      
            snapshot.forEach((doc) => {
              lista.push({
                id: doc.id,
                custo: doc.data().custo,
              });
            });
      
            setCusto(lista);
          })
          .catch((error) => {
            console.log("DEU ALGUM ERRO AO BUSCAR");
          });
      }


    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState("")

    async function cadastrarAtividade(e){
        e.preventDefault()
        await addDoc(collection(db, "atividade"), {
            descricao: descricao,
            quantidade: quantidade,
            custo: custo
        })
        .then(() => {
            setDescricao("")
            setQuantidade("")
            setCusto("")
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
                        value = {descricao} setter = {setDescricao} onlyLetters  /></Col>
                        <Col><TextFields inputLength = {20} isRequired = {true} inputClassName="quantidade-atividade"  label="Quantidade" placeholder="Quantidade."
                         value = {quantidade} setter ={setQuantidade } onlyNumbers /></Col>
                    <Row>
                        <Col><DropdownLists collectionName="custo" fieldName = "custo" inputClassName="custo-atividade" setter={setCusto} value={custo} label="Custo" itens={searchCusto}/></Col>
                        <Col><DropdownLists inputClassName="direcionador-atividade" label="Direcionador" itens={searchCusto}/></Col>
                        <Col><DropdownLists inputClassName="Unidade-atividade" label="Unidade" itens={searchCusto}/></Col>
                    </Row>
                    <Buttons  customButton = "button-activityform" text="Inserir" funcaoBotao = {cadastrarAtividade}  />
                </form>
            </Container>
        </section>
    )
}

export default ActivityForm
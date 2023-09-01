import { Container } from "react-bootstrap";
import Buttons from "../../../components/Button"
import "./ABCReport.css"
import { useState } from "react";
import {collection,getDocs} from 'firebase/firestore'
import { db } from "../../../firebaseConnection";
import DropdownDB from "../../../components/DropdownDB";

const ABCReport = () => {

    const teste = ["teste1", "teste2"];
    const [relatorioabc, setRelatorioABC] = useState([]);

    async function searchABC(e) {
      e.preventDefault()
      const postsRef = collection(db, "relatorioabc");
      await getDocs(postsRef)
        .then((snapshot) => {
          let lista = [];
  
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              atividade: doc.data().atividade,
              custoatividade: doc.data().custoatividade,
              direcionador: doc.data().direcionador,
              custodirecionador: doc.data().custodirecionador,
              quantidade: doc.data().quantidade,
              titulo: doc.data().titulo,
              autor: doc.data().autor,
            });
          });
  
          setRelatorioABC(lista);
        })
        .catch((error) => {
          console.log("DEU ALGUM ERRO AO BUSCAR");
        });
    }

    return (
      <section className="abc-report">
        <Container>
          <form onSubmit={searchABC}>
            <h2>Relatorio Custo ABC</h2>
            <DropdownDB
              inputClassName="relatorio-abc"
              label="Tipo"
              itens={teste}
            />
            <Buttons customButton="button-abcreport" text="Consultar" funcaoBotao ={searchABC}  />
            <ul>
              {relatorioabc.map((relatorioabc) => {
                return (
                  <li key={relatorioabc.id}>
                    <strong>ID: {relatorioabc.id}</strong> <br />
                    <span>Atividade: {relatorioabc.atividade} </span> <br />
                    <span>Custo da Atividade: {relatorioabc.custoatividade}</span>{" "} <br />
                    <span>Direcionador: {relatorioabc.direcionador}</span> <br />
                    <span>Quantidade: {relatorioabc.quantidade}</span> <br />
                    <span>Custo do Direcionador: {relatorioabc.custoadirecionador}</span>{" "}<br />
                  </li>
                );
              })}
            </ul>
          </form>
        </Container>
      </section>
    );
}

export default ABCReport
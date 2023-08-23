import { Container } from "react-bootstrap";
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import "./ABCReport.css"
import { useState } from "react";
import {db} from "../../../firebaseConnection"
import {collection,getDocs} from 'firebase/firestore'

const ABCReport = () => {

    const teste = ["teste1", "teste2"];
    const [custeioABC, setCustoABC] = useState([]);

    async function buscarABC() {
      const postsRef = collection(db, "custeioabc");
      await getDocs(postsRef)
        .then((snapshot) => {
          let lista = [];
  
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              atividade: doc.data().atividade,
              custoatividade: doc.data().custoatividade,
              direcionador: doc.data().direcionador,
              quantidade: doc.quantidade,
              titulo: doc.data().titulo,
              autor: doc.data().autor,
            });
          });
  
          setCustoABC(lista);
        })
        .catch((error) => {
          console.log("DEU ALGUM ERRO AO BUSCAR");
        });
    }

    return (
      <section className="abc-report">
        <Container>
          <form>
            <h2>Relatorio Custo ABC</h2>
            <DropdownLists
              inputClassName="relatorio-abc"
              label="Tipo"
              itens={teste}
            />
            <Buttons customButton="button-abcreport" text="Consultar" funcaoBotao ={buscarABC}  />
            <ul>
              {custeioABC.map((custeioABC) => {
                return (
                  <li key={custeioABC.id}>
                    <strong>ID: {custeioABC.id}</strong> <br />
                    <span>Atividade: {custeioABC.atividade} </span> <br />
                    <span>
                      Custo da Atividade: {custeioABC.custoatividade}
                    </span>{" "}
                    <br />
                    <span>Direcionador: {custeioABC.direcionador}</span> <br />
                    <span>Quantidade: {custeioABC.quantidade}</span> <br />
                    <span>
                      Custo do Direcionador: {custeioABC.custoadirecionador}
                    </span>{" "}
                    <br />
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
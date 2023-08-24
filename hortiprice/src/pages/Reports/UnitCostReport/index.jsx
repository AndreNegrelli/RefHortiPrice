import { Container } from "react-bootstrap";
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import "./UnitCostReport.css"
import { useState } from "react";
import {db} from "../../../firebaseConnection"
import {collection,getDocs} from 'firebase/firestore'

const UnitCostReport = () => {

    const teste = ["teste2"];
    const [relatoriounitario, setrelatorioUnitario] = useState([]);

    async function searchCost(e) {
        e.preventDefault()
        const postsRef = collection(db, "relatoriounitario");
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
    
            setrelatorioUnitario(lista);
          })
          .catch((error) => {
            console.log("DEU ALGUM ERRO AO BUSCAR");
          });
      }
  
    return (
      <section className="cost-unit">
        <Container>
          <form onSubmit={searchCost}>
            <h2>Relatorio Custo Unitario</h2>
            <DropdownLists
              inputClassName="relatorio-custounitario"
              label="Tipo"
              itens={teste}
            />
            <Buttons customButton="button-costunit" text="Consultar" funcaoBotao = {searchCost} />
            <ul>
              {relatoriounitario.map((relatoriounitario) => {
                return (
                  <li key={relatoriounitario.id}>
                    <strong>ID: {relatoriounitario.id}</strong> <br />
                    <span>Atividade: {relatoriounitario.atividade} </span> <br />
                    <span>
                      Custo da Atividade: {relatoriounitario.custoatividade}
                    </span>{" "}
                    <br />
                    <span>Direcionador: {relatoriounitario.direcionador}</span>{" "}
                    <br />
                    <span>Quantidade: {relatoriounitario.quantidade}</span> <br />
                    <span>
                      Custo do Direcionador: {relatoriounitario.custoadirecionador}
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

export default UnitCostReport
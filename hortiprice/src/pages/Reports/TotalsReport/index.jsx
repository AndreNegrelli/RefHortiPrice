import { Container } from "react-bootstrap";
import Buttons from "../../../components/Button"
import "./TotalsReport.css"
import { useState } from "react";
import {db} from "../../../firebaseConnection"
import {collection,getDocs} from 'firebase/firestore'
import DropdownDB from "../../../components/DropdownDB";

const TotalsReport = () => {

    const teste = ["teste1", "teste2"];
    const [relatoriototal, setrelatorioTotal] = useState([]);

    async function searchTotal(e) {
        e.preventDefault()
        const postsRef = collection(db, "relatoriototal");
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
    
            setrelatorioTotal(lista);
          })
          .catch((error) => {
            console.log("DEU ALGUM ERRO AO BUSCAR");
          });
      }

    return (
      <section className="totals-report">
        <Container>
          <form onSubmit={searchTotal}>
            <h2>Relatório Totais por Custo</h2>
            <DropdownDB
              inputClassName="relatorio-total"
              label="Tipo"
              itens={teste}
            />
            <Buttons customButton="button-totalreport" text="Consultar" funcaoBotao = {searchTotal} />
            <ul>
              {relatoriototal.map((relatoriototal) => {
                return (
                  <li key={relatoriototal.id}>
                    <strong>ID: {relatoriototal.id}</strong> <br />
                    <span>Atividade: {relatoriototal.atividade} </span>{" "}
                    <br />
                    <span>
                      Custo da Atividade: {relatoriototal.custoatividade}
                    </span>{" "}
                    <br />
                    <span>
                      Direcionador: {relatoriototal.direcionador}
                    </span>{" "}
                    <br />
                    <span>Quantidade: {relatoriototal.quantidade}</span>{" "}
                    <br />
                    <span>
                      Custo do Direcionador:{" "}
                      {relatoriototal.custoadirecionador}
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

export default TotalsReport
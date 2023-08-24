import { Container } from "react-bootstrap";
import Buttons from "../../../components/Button"
import DropdownLists from "../../../components/DropdownLists"
import "./CostReport.css"
import { useState } from "react";
import {db} from "../../../firebaseConnection"
import {collection,getDocs} from 'firebase/firestore'


const CostReport = () => {

    const [relatoriocusto, setrelatorioCusto] = useState([]);

    async function searchCost(e) {
        e.preventDefault()
        const postsRef = collection(db, "relatoriocusto");
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
    
            setrelatorioCusto(lista);
          })
          .catch((error) => {
            console.log("DEU ALGUM ERRO AO BUSCAR");
          });
      }


    const teste = ["Escolha sua opção", "teste2"];

    return (
      <section className="cost-report">
        <Container>
          <form>
            <h2>Relatório de Custo</h2>
            <DropdownLists
              inputClassName="relatorio-custo"
              label="Tipo"
              itens={teste}
            />
            <Buttons
              customButton="button-costreport"
              text="Consultar"
              funcaoBotao={searchCost}
            />
            <ul>
              {relatoriocusto.map((relatoriocusto) => {
                return (
                  <li key={relatoriocusto.id}>
                    <strong>ID: {relatoriocusto.id}</strong> <br />
                    <span>Atividade: {relatoriocusto.atividade} </span> <br />
                    <span>
                      Custo da Atividade: {relatoriocusto.custoatividade}
                    </span>{" "}
                    <br />
                    <span>
                      Direcionador: {relatoriocusto.direcionador}
                    </span>{" "}
                    <br />
                    <span>Quantidade: {relatoriocusto.quantidade}</span> <br />
                    <span>
                      Custo do Direcionador: {relatoriocusto.custoadirecionador}
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

export default CostReport
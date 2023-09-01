import { Container, Row, Col } from "react-bootstrap";
import Buttons from "../../../components/Button";
import TextFields from "../../../components/TextFields";
import "./CostingABC.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownDB from "../../../components/DropdownDB";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConnection";
import { useState } from "react";

const CostingABC = () => {
  const [custo, setCusto] = useState("");

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

  async function testeSimulacaoABC(e) {
    e.preventDefault();
    await addDoc(collection(db, "cadastrarcomponente"), {
      custo: custo,
     
    })
      .then(() => {
        setCusto("");
      })
      .catch((error) => {});
  }

  return (
    <Container className="costing-abc">
      <form>
        <h2>Custeio ABC</h2>
        <DropdownDB
          title="Escolha uma opção"
          inputClassName="custo-componente"
          label="Custo"
          itens={searchCusto}
          collectionName="custo"
          fieldName="custo"
          setter={setCusto}
          value={custo}
        />
        <Row>
          <Col>
            <TextFields
              inputLength={20}
              isRequired={true}
              inputClassName="mes-componente"
              label="Mês"
              placeholder="Mês."
              onlyLetters
            />
          </Col>
          <Col>
            <TextFields
              inputLength={20}
              isRequired={true}
              inputClassName="ano-componente"
              label="Ano"
              placeholder="Ano."
              onlyNumbers
            />
          </Col>
        </Row>
        <Buttons customButton="button-costingabc" text="Inserir" funcaoBotao={testeSimulacaoABC} />
      </form>
    </Container>
  );
};

export default CostingABC;

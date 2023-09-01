import { Container, Row, Col } from "react-bootstrap";
import Buttons from "../../../components/Button";
import TextFields from "../../../components/TextFields";
import "./ActivityForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../../firebaseConnection";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import DropdownDB from "../../../components/DropdownDB";


const ActivityForm = () => {
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [custo, setCusto] = useState("");
  const [direcionador, setDirecionador] = useState("");
  const [unidade, setUnidade] = useState("");

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

  async function searchDirecionador(direcionador, e) {
    e.preventDefault();
    const collectionRef = collection(db, direcionador);
    await getDocs(collectionRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            direcionador: doc.data().direcionador,
          });
        });

        setCusto(lista);
      })
      .catch((error) => {
        console.log("DEU ALGUM ERRO AO BUSCAR");
      });
  }

  async function searchUnidade(unidade, e) {
    e.preventDefault();
    const collectionRef = collection(db, unidade);
    await getDocs(collectionRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            unidade: doc.data().unidade,
          });
        });

        setCusto(lista);
      })
      .catch((error) => {
        console.log("DEU ALGUM ERRO AO BUSCAR");
      });
  }

  async function cadastrarAtividade(e) {
    e.preventDefault();
    await addDoc(collection(db, "atividade"), {
      descricao: descricao,
      quantidade: quantidade,
      custo: custo,
      direcionador: direcionador,
      unidade: unidade,
    })
      .then(() => {
        setDirecionador("");
        setDescricao("");
        setQuantidade("");
        setUnidade("");
        setCusto("");
      })
      .catch((error) => {});
  }

  return (
    <section className="activity-form">
      <Container>
        <form onSubmit={cadastrarAtividade}>
          <h2>Cadastre uma nova atividade</h2>
          <Col>
            <TextFields
              inputLength={20}
              isRequired={true}
              inputClassName="descrição-atividade"
              label="Descrição"
              placeholder="Descrição."
              value={descricao}
              setter={setDescricao}
              onlyLetters
            />
          </Col>
          <Col>
            <TextFields
              inputLength={20}
              isRequired={true}
              inputClassName="quantidade-atividade"
              label="Quantidade"
              placeholder="Quantidade."
              value={quantidade}
              setter={setQuantidade}
              onlyNumbers
            />
          </Col>
          <Row>
            <Col>
              <DropdownDB
                collectionName="custo"
                fieldName="custo"
                inputClassName="custo-atividade"
                setter={setCusto}
                value={custo}
                label="Custo"
                itens={searchCusto}
              />
            </Col>
            <Col>
              <DropdownDB
                collectionName="direcionador"
                fieldName="direcionador"
                inputClassName="direcionador-atividade"
                setter={setDirecionador}
                value={direcionador}
                label="Direcionador"
                itens={searchDirecionador}
              />
            </Col>
            <Col>
              <DropdownDB
                collectionName="unidade"
                fieldName="unidade"
                inputClassName="Unidade-atividade"
                setter={setUnidade}
                value={unidade}
                label="Unidade"
                itens={searchUnidade}
              />
            </Col>
          </Row>
          <Buttons
            customButton="button-activityform"
            text="Inserir"
            funcaoBotao={cadastrarAtividade}
          />
        </form>
      </Container>
    </section>
  );
};

export default ActivityForm;

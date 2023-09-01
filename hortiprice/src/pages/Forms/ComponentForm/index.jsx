import { Container, Row, Col } from "react-bootstrap";
import Buttons from "../../../components/Button";
import TextFields from "../../../components/TextFields";
import "./ComponentForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../../firebaseConnection";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import DropdownDB from "../../../components/DropdownDB";
import DropdownItems from "../../../components/DropdownItems";

const ComponentForm = () => {
  const listaClassificacao = [
    "Custo Indireto",
    "Custo Fixo",
    "Custo Variável",
    "Custo Direto",
  ];

  const [classificacao, setClassificacao] = useState("")
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");
  const [unidade, setUnidade] = useState("")
  const [custo, setCusto] = useState("");
  const [tipo, setTipo] = useState("")
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

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

        setUnidade(lista);
      })
      .catch((error) => {
        console.log("DEU ALGUM ERRO AO BUSCAR");
      });
  }

  async function searchTipo(tipo, e) {
    e.preventDefault();
    const collectionRef = collection(db, tipo);
    await getDocs(collectionRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            tipo: doc.data().tipo,
          });
        });

        setTipo(lista);
      })
      .catch((error) => {
        console.log("DEU ALGUM ERRO AO BUSCAR");
      });
  }

  async function cadastrarComponente(e) {
    e.preventDefault();
    await addDoc(collection(db, "cadastrarcomponente"), {
      descricao: descricao,
      classificacao: classificacao,
      quantidade: quantidade,
      unidade: unidade,
      tipo: tipo,
      valor: valor,
      custo: custo,
      mes: mes,
      ano: ano,
    })
      .then(() => {
        setClassificacao("");
        setDescricao("");
        setQuantidade("");
        setCusto("");
        setUnidade("");
        setTipo("");
        setValor("");
        setMes("");
        setAno("");
      })
      .catch((error) => {});
  }

  return (
    <section className="component-form">
      <Container className="container">
        <form onSubmit={cadastrarComponente}>
          <h2>Cadastre um novo componente</h2>
          <Row>
            <Col>
              <TextFields
                inputLength={20}
                isRequired={true}
                inputClassName="descrição-componente"
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
                inputClassName="quantidade-componente"
                label="Quantidade"
                placeholder="Quantidade."
                value={quantidade}
                setter={setQuantidade}
                onlyNumbers
              />
            </Col>
            <Col>
              <TextFields
                inputLength={20}
                isRequired={true}
                inputClassName="valor-componente"
                label="Valor"
                placeholder="Valor."
                value={valor}
                setter={setValor}
                onlyNumbers
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextFields
                inputLength={20}
                isRequired={true}
                inputClassName="mes-componente"
                label="Mês"
                placeholder="Mês."
                value={mes}
                setter={setMes}
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
                value={ano}
                setter={setAno}
                onlyNumbers
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <DropdownDB
                title="Escolha uma opção"
                inputClassName="unidade-componente"
                label="Unidade"
                collectionName= "unidade"
                fieldName = "unidade"
                setter = {setUnidade}
                value = {unidade}
                itens={searchUnidade}
              />
            </Col>
            <Col>
              <DropdownDB
                title="Escolha uma opção"
                inputClassName="tipo-componente"
                label="Tipo"
                itens={searchTipo}
                collectionName= "tipo"
                fieldName = "tipo"
                setter = {setTipo}
                value = {tipo}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <DropdownDB
                title="Escolha uma opção"
                inputClassName="custo-componente"
                label="Custo"
                itens={searchCusto}
                collectionName= "custo"
                fieldName = "custo"
                setter = {setCusto}
                value = {custo}
              />
            </Col>
            <Col>
              <DropdownItems
                title="Escolha uma opção"
                inputClassName="classificação-componente"
                label="Classificação"
                items={listaClassificacao}
                value={classificacao}
                setter={setClassificacao}
              />
            </Col>
          </Row>
          <Buttons
            customButton="button-componentform"
            text="Inserir"
            funcaoBotao={cadastrarComponente}
          />
        </form>
      </Container>
    </section>
  );
};

export default ComponentForm;

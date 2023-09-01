import { Container, Row, Col } from "react-bootstrap";
import Buttons from "../../../components/Button";
import TextFields from "../../../components/TextFields";
import "./ProductivityForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../../firebaseConnection";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import DropdownDB from "../../../components/DropdownDB";

const ProductivityForm = () => {
  const [valor, setValor] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [tipo, setTipo] = useState("");

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

  async function cadastrarProdutividade(e) {
    e.preventDefault();
    await addDoc(collection(db, "cadastroprodutividade"), {
      valor: valor,
      mes: mes,
      ano: ano,
      tipo: tipo,
    })
      .then(() => {
        setValor("");
        setMes("");
        setAno("");
        setTipo("");
      })
      .catch((error) => {});
  }

  return (
    <section className="productivity-form">
      <Container>
        <form onSubmit={cadastrarProdutividade}>
          <h2>Cadastro de produtividade</h2>
          <Row>
            <Col>
              <TextFields
                inputLength={20}
                isRequired={true}
                inputClassName="valor-produtividade"
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
          <DropdownDB
            title="Escolha uma opção"
            inputClassName="tipo-componente"
            label="Tipo"
            itens={searchTipo}
            collectionName="tipo"
            fieldName="tipo"
            setter={setTipo}
            value={tipo}
          />
          <Buttons
            customButton="button-productivityform"
            text="Inserir"
            funcaoBotao={cadastrarProdutividade}
          />
        </form>
      </Container>
    </section>
  );
};

export default ProductivityForm;

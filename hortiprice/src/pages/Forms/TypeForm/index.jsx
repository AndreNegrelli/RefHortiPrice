import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../../../components/Button";
import TextFields from "../../../components/TextFields";
import "./TypeForm.css";
import { db } from "../../../firebaseConnection";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import DropdownDB from "../../../components/DropdownDB";

const TypeForm = () => {
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [area, setArea] = useState("");

  async function searchArea(area, e) {
    e.preventDefault();
    const collectionRef = collection(db, area);
    await getDocs(collectionRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            area: doc.data().area,
          });
        });

        setArea(lista);
      })
      .catch((error) => {
        console.log("DEU ALGUM ERRO AO BUSCAR");
      });
  }

  async function searchCategoria(categoria, e) {
    e.preventDefault();
    const collectionRef = collection(db, categoria);
    await getDocs(collectionRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            categoria: doc.data().categoria,
          });
        });

        setCategoria(lista);
      })
      .catch((error) => {
        console.log("DEU ALGUM ERRO AO BUSCAR");
      });
  }

  async function searchSubcategoria(subcategoria, e) {
    e.preventDefault();
    const collectionRef = collection(db, subcategoria);
    await getDocs(collectionRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            subcategoria: doc.data().subcategoria,
          });
        });

        setSubcategoria(lista);
      })
      .catch((error) => {
        console.log("DEU ALGUM ERRO AO BUSCAR");
      });
  }

  async function cadastrarTipo(e) {
    e.preventDefault();
    await addDoc(collection(db, "tipo"), {
      tipo: tipo,
      categoria: categoria,
      subcategoria: subcategoria,
      area: area,
    })
      .then(() => {
        setTipo("");
        setCategoria("");
        setSubcategoria("");
        setArea("")
      })
      .catch((error) => {});
  }

  return (
    <Container className="type-form">
      <form onSubmit={cadastrarTipo}>
        <h2>Cadastre um novo tipo</h2>
        <TextFields
          inputLength={15}
          isRequired={true}
          inputClassName="tipo"
          label="Tipo"
          placeholder="Descrição do tipo."
          value={tipo}
          setter={setTipo}
        />
        <Row>
          <Col>
            <DropdownDB
              title="Escolha uma opção"
              collectionName = "categoria"
              fieldName= "categoria"
              inputClassName="categoryType"
              setter={setCategoria}
              value={categoria}
              label="Categoria"
              itens={searchCategoria}
            />
          </Col>
          <Col>
            <DropdownDB
              title="Escolha uma opção"
              collectionName= "subcategoria"
              fieldName = "subcategoria"
              inputClassName="subcategoryType"
              setter = {setSubcategoria}
              value = {subcategoria}
              label="Subcategoria"
              itens={searchSubcategoria}
            />
          </Col>
          <Col>
            <DropdownDB
              title="Escolha uma opção"
              collectionName= "area"
              fieldName = "area"
              inputClassName="areaType"
              setter = {setArea}
              value = {area}
              label="Area"
              itens={searchArea}
            />
          </Col>
        </Row>
        <Buttons
          customButton="button-typeform"
          text="Inserir"
          funcaoBotao={cadastrarTipo}
        />
      </form>
    </Container>
  );
};

export default TypeForm;

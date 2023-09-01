import TextFields from "../../../components/TextFields";
import Buttons from "../../../components/Button";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConnection";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "./AreaForm.css";
import "bootstrap/dist/css/bootstrap.min.css";


const AreaForm = () => {
  const [area, setArea] = useState("");

  async function cadastrarArea(e) {
    e.preventDefault();
    await addDoc(collection(db, "area"), {
     area: area,
    })
      .then(() => {
        setArea("");
      })
      .catch((error) => {});
  }

  return (
    <section className="area-form">
      <Container>
        <form onSubmit={cadastrarArea}>
          <h2>Cadastre novas areas</h2>
          <TextFields
            inputLength={15}
            inputClassName="area"
            label="Area"
            placeholder="Digite aqui a nova area."
            setter={setArea}
            value={area}
            onlyLetters
          />
          <Buttons
            customButton="button-area"
            text="Inserir"
            funcaoBotao={cadastrarArea}
          />
        </form>
      </Container>
    </section>
  );
};

export default AreaForm;

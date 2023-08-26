import 'bootstrap/dist/css/bootstrap.min.css';
import "./RegisterForm.css";
import {Container, Row, Col} from 'react-bootstrap';
import TextFields from "../../../components/TextFields";
import DropdownLists from "../../../components/DropdownLists";
import Buttons from '../../../components/Button';
import { Link } from 'react-router-dom';
import { db } from "../../../firebaseConnection";
import {addDoc, collection} from 'firebase/firestore'
import { useState } from "react";

const RegisterForm = () => {

  const listaGenero = ["Escolha uma das opções","Masculino", "Feminino", "Outro", "Não informar"]
  const listaEstadoCivil = ["Escolha uma das opções","Solteiro(a)", "Casado(a)", "Viuvo(a)"]
  const [genero, setGenero] = useState(listaGenero)
  const [estadoCivil, setEstadoCivil] = useState(listaEstadoCivil)
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCPF] = useState("");
  const [rg, setRG] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
 

  async function cadastrarUsuario(e) {
    e.preventDefault();
    await addDoc(collection(db, "cadastrousuario"), {
      nome: nome,
      sobrenome: sobrenome,
      genero: genero,
      estadoCivil: estadoCivil,
      cpf : cpf,
      rg : rg,
      rua: rua,
      complemento: complemento,
      numero: numero,
      cidade: cidade,
      estado: estado,
      pais: pais,
      email: email,
      telefone: telefone,
      senha: senha
    })
      .then(() => {
        setNome("")
        setSobrenome("")
        setGenero("")
        setEstadoCivil("")
        setCPF("")
        setRG("")
        setRua("")
        setComplemento("")
        setNumero("")
        setCidade("")
        setEstado("")
        setPais("")
        setEmail("")
        setTelefone("")
        setSenha("")
      })
      .catch((error) => {});
  }

  return (
    <section className='register-form'>
      <Container>
        <form onSubmit={cadastrarUsuario}>
          <h2>Preencha com os dados para se cadastrar</h2>
          <Row>
            <Col><TextFields  inputLength = {15} isRequired={true} inputClassName="nome"  label="Nome" placeholder="Digite seu nome."
            value={nome} setter={setNome} onlyLetters/></Col>
            <Col><TextFields inputLength = {15} isRequired={true} inputClassName="sobrenome" label ="Sobrenome" placeholder="Digite seu sobrenome."
            value={sobrenome} setter={setSobrenome} onlyLetters /></Col>
          </Row>
          <Row>
            <Col><DropdownLists inputClassName="sexo" label="Sexo" itens={listaGenero}
            value={genero} setter={setGenero}  /></Col>
            <Col><DropdownLists inputClassName="estado-civil" label="Estado Civil" itens={listaEstadoCivil}
            value={estadoCivil} setter={setEstadoCivil}  /></Col>
          </Row>
          <Row>
            <Col><TextFields  inputLength = {14} isRequired={true} inputClassName="cpf" label="CPF" placeholder="Digite seu CPF."
            value={cpf} setter={setCPF}  onlyNumbers /></Col>
            <Col><TextFields  inputLength = {9}  isRequired={true} inputClassName="rg" label="RG" placeholder="Digite seu RG."
            value={rg} setter={setRG} onlyNumbers /></Col>
          </Row>
          <TextFields inputLength = {45} isRequired={true} inputClassName="rua" label="Endereço" placeholder="Digite sua rua."
          value={rua} setter={setRua} onlyLetters  />
          <Row>
            <Col><TextFields inputLength = {10} isRequired={true} inputClassName="complemento" placeholder="Complemento."
            value={complemento} setter={setComplemento} onlyLetters  /></Col>
            <Col><TextFields inputLength = {10} isRequired={true} inputClassName="numero-residencia" placeholder="Número."
            value={numero} setter={setNumero} onlyNumbers  /></Col>
          </Row>
          
          <Row>
            <Col><TextFields inputLength = {45} isRequired={true} inputClassName="cidade" placeholder="Digite sua cidade."
            value={cidade} setter={setCidade} onlyLetters /></Col>
            <Col><TextFields inputLength = {15} isRequired={true} inputClassName="estado" placeholder="Digite seu estado."
            value={estado} setter={setEstado} onlyLetters /></Col>
            <Col><TextFields inputLength = {10} isRequired={true} inputClassName="pais" placeholder="Digite seu pais."
            value={pais} setter={setPais} onlyLetters  /></Col>
          </Row>
          <Row>
            <Col><TextFields inputLength = {50} isRequired={true} inputClassName="email" label="E-mail" placeholder="Digite seu E-mail."
            value={email} setter={setEmail}  /></Col>
            <Col><TextFields inputLength = {20} isRequired={true} inputClassName="n-telefone" label="Numero de telefone" placeholder="Digite seu telefone."
            value={telefone} setter={setTelefone} onlyNumbers /></Col>
            <Col><TextFields inputLength = {15} isRequired={true} inputClassName="senha" label="Senha" placeholder="Digite uma senha."
            value={senha} setter={setSenha}  /></Col>
          </Row>
          <Buttons text = "Registrar-se" funcaoBotao={cadastrarUsuario}/>
          <Link className='link' to='/login'>Ja possui conta ?</Link>
      </form>
    </Container>
    </section>
  );
  
};

export default RegisterForm;

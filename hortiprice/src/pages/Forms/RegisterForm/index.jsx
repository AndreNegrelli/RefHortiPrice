import 'bootstrap/dist/css/bootstrap.min.css';
import "./RegisterForm.css";
import {Container, Row, Col} from 'react-bootstrap';
import TextFields from "../../../components/TextFields";
import DropdownLists from "../../../components/DropdownLists";
import Buttons from '../../../components/Button';

const RegisterForm = () => {

  const genero = ["Masculino", "Feminino", "Outro", "Não informar"];
  const estadoCivil = ["Solteiro(a)", "Casado(a)", "Viuvo(a)"];

  return (
    <section className='register-form'>
      <Container>
        <form>
          <h2>Preencha com os dados para se cadastrar</h2>
          <Row>
            <Col><TextFields  inputLength = {15} isRequired={true} inputClassName="nome"  label="Nome" placeholder="Digite seu nome." /></Col>
            <Col><TextFields inputLength = {15} isRequired={true} inputClassName="sobrenome" label ="Sobrenome" placeholder="Digite seu sobrenome." /></Col>
          </Row>
          <Row>
            <Col><DropdownLists inputClassName="sexo" label="Sexo" itens={genero}/></Col>
            <Col><DropdownLists inputClassName="estado-civil" label="Estado Civil"  itens={estadoCivil}/></Col>
          </Row>
          <Row>
            <Col><TextFields  inputLength = {14} isRequired={true} inputClassName="cpf" label="CPF" placeholder="Digite seu CPF." /></Col>
            <Col><TextFields  inputLength = {9}  isRequired={true} inputClassName="rg" label="RG" placeholder="Digite seu RG." /></Col>
          </Row>
          <TextFields inputLength = {45} isRequired={true} inputClassName="rua" label="Endereço" placeholder="Digite sua rua." />
          <Row>
            <Col><TextFields inputLength = {10} isRequired={true} inputClassName="complemento" placeholder="Complemento." /></Col>
            <Col><TextFields inputLength = {10} isRequired={true} inputClassName="numero-residencia" placeholder="Número." /></Col>
          </Row>
          
          <Row>
            <Col><TextFields inputLength = {45} isRequired={true} inputClassName="cidade" placeholder="Digite sua cidade." /></Col>
            <Col><TextFields inputLength = {15} isRequired={true} inputClassName="estado" placeholder="Digite seu estado." /></Col>
            <Col><TextFields inputLength = {10} isRequired={true} inputClassName="pais" placeholder="Digite seu pais." /></Col>
          </Row>
          <Row>
            <Col><TextFields inputLength = {50} isRequired={true} inputClassName="email" label="E-mail" placeholder="Digite seu E-mail." /></Col>
            <Col><TextFields inputLength = {20} isRequired={true} inputClassName="n-telefone" label="Numero de telefone" placeholder="Digite seu telefone." /></Col>
            <Col><TextFields inputLength = {15} isRequired={true} inputClassName="senha" label="Senha" placeholder="Digite uma senha." /></Col>
          </Row>
          <Buttons text = "Registrar-se"/>
      </form>
    </Container>
    </section>
  );
};

export default RegisterForm;

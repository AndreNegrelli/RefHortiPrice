import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import TextFields from "../../TextFields";
import DropdownLists from "../../DropdownLists";
import "./RegisterForms.css";
import Buttons from '../../Button';

const RegisterForms = () => {
  const genero = ["Masculino", "Feminino", "Outro", "Não informar"];

  const estadoCivil = ["Solteiro(a)", "Casado(a)", "Viuvo(a)"];

  return (
    <section className='register-forms'>
      <Container className="container">
        <form>
        <h2>Preencha com os dados para se cadastrar</h2>
      <Row>
        <Col><TextFields inputClassName="nome"  label="Nome" placeholder="Digite seu nome." /></Col>
        <Col><TextFields inputClassName="sobrenome" label ="Sobrenome" placeholder="Digite seu sobrenome." /></Col>
      </Row>
      <Row>
        <Col><DropdownLists inputClassName="sexo" label="Sexo" itens={genero}/></Col>
        <Col><DropdownLists inputClassName="estado-civil" label="Estado Civil"  itens={estadoCivil}/></Col>
      </Row>
      <Row>
        <Col><TextFields inputClassName="cpf" label="CPF" placeholder="Digite seu CPF." /></Col>
        <Col><TextFields inputClassName="rg" label="RG" placeholder="Digite seu RG." /></Col>
      </Row>
      <TextFields inputClassName="rua" label="Endereço" placeholder="Digite sua rua." />
      <Row>
        <Col><TextFields inputClassName="complemento" placeholder="Complemento." /></Col>
        <Col><TextFields inputClassName="numero-residencia" placeholder="Número." /></Col>
      </Row>
      
      <Row>
        <Col><TextFields inputClassName="cidade" placeholder="Digite sua cidade." /></Col>
        <Col><TextFields inputClassName="estado" placeholder="Digite seu estado." /></Col>
        <Col><TextFields inputClassName="pais" placeholder="Digite seu pais." /></Col>
      </Row>
      <Row>
        <Col><TextFields inputClassName="email" label="E-mail" placeholder="Digite seu E-mail." /></Col>
        <Col><TextFields inputClassName="n-telefone" label="Numero de telefone" placeholder="Digite seu telefone." /></Col>
        <Col><TextFields inputClassName="senha" label="Senha" placeholder="Digite uma senha." /></Col>
      </Row>
      <Buttons text = "Registrar-se"/>
      </form>
    </Container>
    </section>
  );
};

export default RegisterForms;

import './LoginForm.css'
import Buttons from '../../../components/Button';
import TextFields from '../../../components/TextFields';
import { Link } from 'react-router-dom';
import { Container, Row} from 'react-bootstrap';
import { db } from '../../../firebaseConnection';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';


const LoginForm = () => {
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");

    async function loginSite(e) {
      e.preventDefault();
      await addDoc(collection(db, "esqueceusenha"), {
        email: email,
        senha: senha
      })
        .then(() => {
          setEmail("");
          setSenha("");
        })
        .catch((error) => {});
    }

    return (
       <section className='login-form'>
        <Container>
             <form onSubmit={loginSite}>
                 <h2>Preencha com seus dados para logar</h2>
                     <TextFields inputLength = {50} isRequired={true} inputClassName="email" label="E-mail" placeholder="Digite seu E-mail." value={email} setter={setEmail} />
                     <Row>
                        <TextFields inputLength = {15} isRequired={true} inputClassName="senha" label="Senha" placeholder="Digite sua senha." value={senha} setter={setSenha} />
                     </Row>
                     <Row>
                        <Link className='link'  to='/esqueceusenha'>Esqueceu a senha ?</Link>
                     </Row>
                    <Buttons customButton="button-login" text = "Logar" funcaoBotao={loginSite} />
                    <Link className='link' to='/registro'>Não possui conta ?</Link>
             </form>
        </Container>
           
       </section>
    )

}

export default LoginForm
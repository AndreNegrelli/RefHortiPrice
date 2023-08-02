import './LoginForm.css'
import Buttons from '../../../components/Button';
import TextFields from '../../../components/TextFields';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const LoginForm = () => {
    return (
       <section className='login-form'>
        <Container>
             <form>
                 <h2>Preencha com seus dados para logar</h2>
                     <TextFields inputLength = {50} isRequired={true} inputClassName="email" label="E-mail" placeholder="Digite seu E-mail." />
                     <Row>
                        <TextFields inputLength = {15} isRequired={true} inputClassName="senha" label="Senha" placeholder="Digite sua senha." />
                     </Row>
                     <Row>
                        <Link to='' className='forgot-password'>Esqueceu a senha ?</Link>
                     </Row>
                    <Buttons customButton="button-login" text = "Logar"/>
                    <Link to='/registro' className='forgot-password'>Não possui conta ?</Link>
             </form>
        </Container>
           
       </section>
    )

}

export default LoginForm
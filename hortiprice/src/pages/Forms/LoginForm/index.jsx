import './LoginForm.css'
import Buttons from '../../../components/Button';
import TextFields from '../../../components/TextFields';



const LoginForm = () => {
    return (
       <section className='login-form'>
            <form>
                <h2>Preencha com seus dados para logar</h2>
                <TextFields inputLength = {50} isRequired={true} inputClassName="email" label="E-mail" placeholder="Digite seu E-mail." />
                <TextFields inputLength = {15} isRequired={true} inputClassName="senha" label="Senha" placeholder="Digite sua senha." />
                <Buttons customButton="button-login" text = "Logar"/>
            </form>
       </section>
    )

}

export default LoginForm
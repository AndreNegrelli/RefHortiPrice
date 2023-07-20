import './ContactForm.css'
import Buttons from '../../../components/Button';
import TextFields from '../../../components/TextFields';



const ContactForm = () => {
    return (
       <section className='contact-form'>
            <form>
                <h2>Preencha com seus dados para logar</h2>
                <TextFields inputLength = {15} isRequired = {true} inputClassName="nome"  label="Nome" placeholder="Digite seu nome." />
                <TextFields inputLength = {15} isRequired = {true} inputClassName="sobrenome" label ="Sobrenome" placeholder="Digite seu sobrenome." />
                <TextFields inputLength = {50} isRequired = {true} inputClassName="email" label="E-mail" placeholder="Digite seu E-mail." />
                <TextFields inputLength = {100} isRequired = {true} inputClassName="message" label="Message" placeholder="Escreva sua mensagem"  />
                <Buttons text = "Enviar"/>
            </form>
       </section>
    )

}

export default ContactForm
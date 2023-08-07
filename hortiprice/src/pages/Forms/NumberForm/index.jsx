import './NumberForm.css'
import Buttons from '../../../components/Button';
import TextFields from '../../../components/TextFields';
import { Container } from 'react-bootstrap';

const NumberForm = () => {
    return (
       <section className='number-form'>
            <Container>
                <form>
                    <h2>Cadastro de unidade</h2>
                    <TextFields inputLength = {30} isRequired={true} inputClassName="unidade" label="Unidade" placeholder="Descrição." />
                    <Buttons customButton="button-number" text = "Inserir"/>
                </form>
            </Container>
       </section>
    )

}

export default NumberForm
import './NumberForm.css'
import Buttons from '../../../components/Button';
import TextFields from '../../../components/TextFields';

const NumberForm = () => {
    return (
       <section className='number-form'>
            <form>
                <h2>Inclua Unidades</h2>
                <TextFields inputLength = {30} isRequired={true} inputClassName="unidade" label="Unidade" placeholder="Descrição." />
                <Buttons customButton="button-number" text = "Inserir"/>
            </form>
       </section>
    )

}

export default NumberForm
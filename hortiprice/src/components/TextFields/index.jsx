import './TextFields.css'
import { useState } from 'react'

const TextFields = (props) => {

    const [restriction, setRestriction] = useState("")

    const handleInputChange = (eve) => {
        let result = eve.target.value
        
        if(props.onlyLetters) {
            result = result.replace(/[^a-z\s]/gi, '')
            if (result !== eve.target.value) {
                alert('Este campo não aceita numeros, acentos ou simbolos')
            }

        }else if (props.onlyNumbers) {
            result = result.replace(/[^0-9\s]/g, '')
            if (result !== eve.target.value) {
                alert('Este campo nao aceita letras')
            }
            
        }

        setRestriction(result)
        props.setter(result)
    }


    return (
      <div className={`text-fields ${props.customClassName}`}>
        <label>{props.label}</label>
        <input
          type="text"
          value={props.value}
          restriction ={restriction}
          maxLength={props.inputLength}
          className={`input-field ${props.inputClassName}`}
          placeholder={props.placeholder}
          onChange={handleInputChange}
        />
      </div>
    );

}

export default TextFields
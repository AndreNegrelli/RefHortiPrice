import './TextFields.css'

const TextFields = (props) => {

    return (
        <div className={`text-fields ${props.customClassName}`}>
            <label>{props.label}</label>
            <input type="text" maxLength={props.inputLength} required={props.isRequired} className={`input-field ${props.inputClassName}`} placeholder={props.placeholder}/>
        </div>
    )

}

export default TextFields
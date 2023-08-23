import "./Button.css"


const Buttons = (props) => {
    return(
        <button onClick={props.funcaoBotao} className={`button ${props.customButton}`}>
            {props.text}
        </button>
    )
}

export default Buttons
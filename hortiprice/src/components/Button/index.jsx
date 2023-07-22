import "./Button.css"


const Buttons = (props) => {
    return(
        <button className={`button ${props.customButton}`}>
            {props.text}
        </button>
    )
}

export default Buttons
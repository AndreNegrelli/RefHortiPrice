import "./Button.css";

const Buttons = (props) => {
  return (
    <button
      onClick={props.funcaoBotao}
      className={`button ${props.customButton}`}
      type="submit"
    >
      {props.text}
    </button>
  );
};

export default Buttons;

import "./DropdownItems.css";

const DropdownItems = (props) => {
  return (
    <div className="dropdown-db">
      <label>{props.label}</label>
        <select value={props.value} onChange={(e) => props.setter(e.target.value)}>
          <option disabled value="">
            {props.title}
          </option>
            {props.items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownItems;

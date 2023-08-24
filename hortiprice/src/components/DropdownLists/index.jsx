import './DropdownLists.css'

const DropdownLists = (props) => {
    return (
            <div className='dropdown-lists'>
                <label>{props.label}</label>
                <select value={props.value} onChange={(e) => props.setter(e.target.value)} >
                    {props.itens.map(item => <option key={item} > {item} </option>)}
                </select>
            </div>

    )
}

export default DropdownLists


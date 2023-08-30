import DropdownLinks from "../DropdownLinks"
import { useState, useEffect, useRef } from "react";
import './MenuItemsHeader.css'
import { Link } from "react-router-dom";

const MenuItemsHeader = ({items}) => {
    const [dropdown, setDropdown] = useState(false)
    let ref = useRef()

    useEffect(()=>{
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)){
                setDropdown(false)
            }
        }
        document.addEventListener("mousedown", handler)
        document.addEventListener("touchstart", handler)
        return () =>{
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }

    })
   
    const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
    }

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false)
    }

    return (
        <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {items.submenu ? (
                <>
                    <button type="button" aria-expanded={dropdown ? "true" : "false"} 
                    onClick={() => setDropdown((prev) => !prev)}>
                        {items.title}{' '}
                    </button>
                    <DropdownLinks submenus={items.submenu} dropdown={dropdown} />
                </>
            ):(
                <Link to={items.url}>{items.title} </Link>
            )}
        </li>
    )
}

export default MenuItemsHeader
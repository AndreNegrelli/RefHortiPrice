import MenuItemsFooter from "../MenuItemsFooter"
import { menuItemsFooter } from "../MenuItemsFooter/menuItemsFooter"


const NavbarFooter = (props) => {
    return(
        <nav className={props.className}>
            <ul className="menus-footer">
                {menuItemsFooter.map((menu, index) => {
                   return <MenuItemsFooter items={menu} key = {index} />
                })}
            </ul>
        </nav>
    )
}
export default NavbarFooter
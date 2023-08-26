import MenuItemsHeader from "../MenuItemsHeader"
import { menuItemsHeader } from "../MenuItemsHeader/menuItemsHeader"

const NavbarHeader = () => {
    return(
        <nav>
            <ul className="menus-header">
                {menuItemsHeader.map((menu, index) => {
                    return <MenuItemsHeader items={menu} key = {index} />
                })}
            </ul>
        </nav>
    )
}
export default NavbarHeader
import './MenuItemsFooter.css'


const MenuItemsFooter = ({ items }) => {
    return (
      <li className="footer-items">
        {items.submenu ? (
          <>
            <button type="button" aria-haspopup="menu">
              {items.title}{' '}
            </button>
          </>
        ) : (
          <a href={items.url}>{items.title}</a>
        )}
      </li>
    );
  };
  
  export default MenuItemsFooter;
import Navbar from "../Navbar";
import './Header.css'


const Header = () => {

  return (
    <header>
      <div className="img-header">
        <img src="/images/header_horti.png" alt="rodape principal"/>
      </div>
      <div className='nav-area'>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;

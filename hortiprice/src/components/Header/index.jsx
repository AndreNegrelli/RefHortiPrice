import { Container } from "react-bootstrap";
import Navbar from "../Navbar";
import './Header.css'


const Header = () => {

  return (
    <Container className="header"> 
      <div className="img-header">
        <img src="/images/header_horti.png" alt="rodape principal"/>
      </div>
      <header>
      <div className='nav-area'>
        <Navbar/>
      </div>
    </header>

    </Container>
    
  );
};

export default Header;


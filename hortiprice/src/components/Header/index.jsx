import { Container } from "react-bootstrap";
import './Header.css'
import NavbarHeader from "../NavbarHeader";


const Header = () => {

  return (
    <Container className="header"> 
      <div className="img-header">
        <img src="/images/header_horti.png" alt="header principal"/>
      </div>
      <header>
      <div className='nav-area'>
        <NavbarHeader/>
      </div>
    </header>
    </Container>
    
  );
};

export default Header;


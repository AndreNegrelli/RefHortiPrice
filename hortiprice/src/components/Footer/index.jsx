import "./Footer.css";
import {Container} from "react-bootstrap";
import NavbarFooter from "../NavbarFooter";

const Footer = () => {
  return (
    <Container className="footer"> 
    <div className="img-footer">
      <img src="/images/footer_horti.png" alt="rodape principal"/>
    </div>
    <header>
    <div>
     <NavbarFooter className="navbar-footer"/>
    </div>
    </header>
    </Container>
  );
};





export default Footer;

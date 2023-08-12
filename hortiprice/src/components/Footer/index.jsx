import { Link } from "react-router-dom";
import "./Footer.css";
import { Col, Container} from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Col>
        <div className="wrapper-footer">
          <div className="img">
            <img src="/images/rodape_horti.png" alt="rodape principal"/>
          </div>
          <div className="links-footer">
              <Col><p>Links</p></Col>
              <Col><Link className="link-footer" to='/contato'>Contato</Link></Col>
              <Col><Link className="link-footer" to=''>Ajuda</Link></Col>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default Footer;


import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Criado por Basetech
                </a>
              </li>
        
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, Feito com {" "}
              <i className="fa fa-heart heart" /> Criado por Basetech
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;

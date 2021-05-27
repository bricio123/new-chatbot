/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            title="Coded by Creative Tim"
          >
            Chatbot
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/bricio123/chatbot"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-index-navbar"
               
              >
                <i className="nc-icon nc-book-bookmark" /> Documetação do ssh
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink  to="/register-page" tag={Link}>
                <i className="nc-icon nc-single-02"/> Login
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/landing-page" tag={Link}>
                <i className="nc-icon  nc-bulb-63" /> Saber mais 
              </NavLink>
            </NavItem>

            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-index-navbar"
                target="_blank"
              >
                <i className="nc-icon nc-spaceship"></i> Comece a conversar
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;

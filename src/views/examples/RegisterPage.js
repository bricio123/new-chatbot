
import React from "react";

import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";



  
  

function Auth(){
  var btn = document.getElementById("btLogin");
  var password = document.getElementById("inputPassword");
  var email = document.getElementById("inputEmail");

  try{

    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(function(result){
    
      window.location.replace('index.html')
    
    })
  }
    catch{
      alert("usuario nao encontrado")
    }
  

}

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
  
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Bem vindo</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >

                    <i className="fa fa-google-plus" />

                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Email</label>
                    <Input placeholder="Email" type="text" id='inputEmail'/>
                  <label>Senha</label>
                  <Input placeholder="Senha" type="password" id='inputPassword'/>

                  <Button block className="btn-round" color="danger" id='btLogin' onClick={Auth}>
                    Registrar
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Esqueceu sua senha?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, Feito com {" "}
            <i className="fa fa-heart heart" />Criado por Basetech
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;

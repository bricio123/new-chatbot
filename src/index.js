import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";


import firebase from 'firebase';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


  var firebaseConfig = {
    apiKey: "AIzaSyBzU2Q265RXLjAmCmcxgZo3AqIxdU5JqPE",
    authDomain: "chatbot-b1baa.firebaseapp.com",
    projectId: "chatbot-b1baa",
    storageBucket: "chatbot-b1baa.appspot.com",
    messagingSenderId: "904838648400",
    appId: "1:904838648400:web:6a4d9daf5b019dbea97755",
    measurementId: "G-BQ7K1SK7E2"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

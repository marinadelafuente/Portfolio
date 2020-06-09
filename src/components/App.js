import React from "react";
import {Switch, Route} from 'react-router-dom';
import "../App.css";
import Nav from "./Nav";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/">
        <Header />
        <AboutMe />
        <Technologies />
        <Contact />
      </Route>
      </Switch>
      <Footer />
    </div>
  );
  } 

export default App;

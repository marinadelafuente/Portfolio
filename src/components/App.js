import React from "react";
import {Switch, Route} from 'react-router-dom';
import "../App.css";
import Nav from "./Nav";
import Header from "./Header";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import ProjectDetails from './ProjectDetails';
import Technologies from "./Technologies";
import Contact from "./Contact";
import Footer from "./Footer";
import projects from '../services/projects.json';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects
    }
    this.renderProjectDetail = this.renderProjectDetail.bind(this);
  }

  renderProjectDetail(props) {
    const routeId = parseInt(props.match.params.id);
    const project = this.state.projects.find((project) => {
      return project.id === routeId;
    })
      return <ProjectDetails project={project} />
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Nav />
            {/* <Route exact path="/Header" component={Header} /> */}
            <Header />
            {/* <Route exact path="/AboutMe" component={AboutMe} /> */}
            <AboutMe />
            {/* <Route exact path="/ProjectList" component={ProjectList} /> */}
            <ProjectList projects={projects} />
            {/* <Route exact path="/Technologies" component={Technologies} /> */}
            <Technologies />
            {/* <Route exact path="/Contact" component={Contact} /> */}
            <Contact />
          </Route>
          <Route exact path="/project/:id" render={this.renderProjectDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

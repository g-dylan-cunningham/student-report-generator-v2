import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Project from './Project';
import * as firebase from "firebase/app";

var firebaseConfig = {
  // ...
};

// Initialize Firebase


function App() {
  firebase.initializeApp(firebaseConfig);
  console.log("FB", firebase.app().name); 
  return (
    <div className="App">




    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/project" component={Project} />
      
    </Switch>
    </div>
  );
}

export default App;

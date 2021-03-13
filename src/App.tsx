import React from 'react';
import './App.css';
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// @ts-ignore
import Home from "./screens/home";
// @ts-ignore
import Countries from "./screens/countries";
// @ts-ignore
import Weather from "./screens/weather";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/countries/:country" component={Countries} />
        <Route path="/weather/:capital" component={Weather} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

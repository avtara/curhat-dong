import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from './pages/Detail';
import Login from './pages/Login';
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/detail/:id' component={Detail} ></Route>
          <Route exact path='/login' component={Login} ></Route>
          <Route path='*' component={NotFound}></Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

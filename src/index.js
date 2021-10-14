import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Emails from './emails'
import Request from './request'
import Printer from './printerPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Forms from './forms'
import Login from './login'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/Emails' component={Emails} />
      <Route path='/Request' component={Request} />
      <Route path='/Printer' component={Printer} />
      <Route path='/Forms' component={Forms} />
      <Route path='/Login' component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

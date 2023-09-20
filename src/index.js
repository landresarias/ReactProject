
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Nav />
    <Main />
    <Footer />
    <App />
  </React.StrictMode>,
  document.getElementById('myroot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

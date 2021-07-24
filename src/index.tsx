import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyle'; // importa o globalStyle.ts que esta dentro do diretorio src
import Welcome from './components/Welcome';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);


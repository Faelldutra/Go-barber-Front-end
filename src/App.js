import React from 'react';
import GlobalStyle from './style/global';
import Routes from './routes/index';
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;

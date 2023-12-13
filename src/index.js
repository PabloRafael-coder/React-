import React from 'react';
import ReactDOM from 'react-dom/client';
import StyleGlobal from './styles/styleGlobal';

import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < >
    <Routes />
    <StyleGlobal />
  </>,
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './Context/Context';
import { SpeechProvider } from '@speechly/react-client'

ReactDOM.render(
  <SpeechProvider appId="90e69f5a-350e-4097-8624-f19a05a46d93" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
  ,
  document.getElementById('root')
);




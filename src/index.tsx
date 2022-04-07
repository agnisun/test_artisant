import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyles} from "./styles/global";
import {ThemeProvider as EmotionProvider} from '@emotion/react';
import {emotionTheme} from "./styles/theme";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment)
root.render(
  <Provider store={store}>
    <EmotionProvider theme={emotionTheme}>
      <GlobalStyles/>
      <App/>
    </EmotionProvider>
  </Provider>
)
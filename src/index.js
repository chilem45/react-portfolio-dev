import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
export { ReactComponent as Php } from "./assets/php.svg";
export { ReactComponent as Figma } from "./assets/figma.svg";
export { ReactComponent as VueIcon } from "./assets/Vue.js.svg";
export { ReactComponent as ReactIcon } from "./assets/react.svg";
export { ReactComponent as JavaEE } from "./assets/java-icon.svg";
export { ReactComponent as AdobeXd } from "./assets/adobe-xd.svg";
export { ReactComponent as JqueryIcon } from "./assets/jquery.svg";
export { ReactComponent as Bootstrap } from "./assets/bootstrap.svg";
export { ReactComponent as HtmlCssJs } from "./assets/html_css_js.svg";
export { ReactComponent as Springboot } from "./assets/springboot.svg";
export { ReactComponent as Terminal } from "./assets/terminal.svg";
export { ReactComponent as LogoSite } from "./assets/logo-site.svg";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

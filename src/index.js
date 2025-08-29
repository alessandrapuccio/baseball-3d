// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// window.BallSpinApp = App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export { App as BallSpinApp };
window.BallSpinApp = App;

// if (typeof window !== "undefined") {
//   window.BallSpinApp = App;
// }
// Only mount React app if running standalone (React dev or production)
// const container = document.getElementById('root');
// if (container) {
//   const root = ReactDOM.createRoot(container);
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }
 
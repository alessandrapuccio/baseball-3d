import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);



// export { App as BallSpinApp };
// window.BallSpinApp = App;

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
 
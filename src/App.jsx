import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Bodyone from "./bodyOne";
// import Promocard from "./Promocard"
// import ShoppingCart from "./shoppingcart";

function App() {
  console.log("Main se está renderizando");
  return (
    <React.Fragment>
        <Header/>
        <Bodyone/>
        {/* <Promocard/> */}
    </React.Fragment>
  );
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

export default App;



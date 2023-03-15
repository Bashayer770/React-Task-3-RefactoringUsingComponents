import React from "react";
import Home from "./component/home";
import ProductList from "./productList";
// Data
import products from "./products";
// Styling
import "./App.css";
import Profile from "./component/Profile";

function App() {
  return (
    <div className="body">
      <Home></Home>
      <div className="list">
        {products.map((x) => (
          <ProductList name={x.name} price={x.price} image={x.image} />
        ))}

        <Profile name={"Bashayer"} age={27}></Profile>
      </div>
    </div>
  );
}

export default App;

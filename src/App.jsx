import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";

import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Ball from "./pages/Animation/Ball.jsx";
import Calculator from "./pages/Calculator/Calculator.jsx";
import Components from "./pages/Components/Component.jsx";
import Todo from "./pages/Todo/Todo.jsx";
import Product from "./pages/Products/Product";
import Cart from "./pages/Carts/Cart.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import { fetchProducts } from "./Data/products.jsx";

import "./App.css";

const intTab = "home";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(intTab);
  }, []); 

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => setProducts(fetchProducts()), []);
  useEffect(() => console.log(products), [products]);

  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  products={products}
                  carts={carts}
                  setToken={setToken}
                  role={role}
                  tab={tab}
                  setTab={setTab}
                />
              }
            >
              <Route path={"/"} element={<Home />} />
              <Route path={"/home"} element={<Home />} />
              <Route path={"/animation"} element={<Ball />} />
              <Route path={"/todo"} element={<Todo />} />
              <Route path={"/calculator"} element={<Calculator />} />
              <Route path={"/components"} element={<Components />} />
              <Route
                path={"/products"}
                element={
                  <Product
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path={"/Carts"}
                element={<Cart carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
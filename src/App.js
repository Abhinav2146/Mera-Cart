import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";
import "./App.css";

function App() {
  const products = [
    { name: "Iphone", price: 100000, quantity: 0 },
    { name: "Redmi", price: 10000, quantity: 0 },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incQty = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decQty = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }
  };

  const reset = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
      totalAmount = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const remove = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const add = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem add={add} />
        <ProductList
          productList={productList}
          incQty={incQty}
          decQty={decQty}
          remove={remove}
        />
      </main>
      {<Footer totalAmount={totalAmount} reset={reset} />}
    </>
  );
}

export default App;

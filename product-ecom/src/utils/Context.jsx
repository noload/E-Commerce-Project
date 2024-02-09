import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const ProductContext = createContext();

const Context = (props) => {
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("product")) || null
  );

  // const getProduct = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     setProduct(data);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;

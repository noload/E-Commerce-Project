import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";
const Home = () => {
  //to get query params
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [product, setProduct] = useContext(ProductContext);
  const [filterProduct, setFilterProduct] = useState(null);
  const getProductsByCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilterProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filterProduct || category == "undefined") {
      setFilterProduct(product);
    }
    if (category != "undefined") {
      getProductsByCategory();
    }
  }, [category, product]);
  return (
    <>
      <Nav />
      {product ? (
        <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
          {filterProduct &&
            filterProduct.map((p, i) => {
              return (
                <Link
                  key={i}
                  to={`/details/${p.id}`}
                  className="card p-3 border shadow rounded w-[18%] h-[40vh] flex flex-col justify-center items-center mr-3 mb-3"
                >
                  <div
                    className="w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110 transition-all ease-in-out duration-300"
                    style={{
                      backgroundImage: `url(${p.image})`,
                    }}
                  ></div>
                  <h1 className="hover:text-blue-300">{p.title}</h1>
                </Link>
              );
            })}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;

import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [product, setProduct] = useContext(ProductContext);
  return (
    <>
      <Nav />
      {product ? (
        <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
          {product.map((p, i) => {
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

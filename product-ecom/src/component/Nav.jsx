import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [product, setProduct] = useContext(ProductContext);
  let distinct_Category =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_Category = [...new Set(distinct_Category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.5)`;
  };
  return (
    <nav className="w-[15%] h-full flex flex-col items-center bg-zinc-100 pt-5">
      <a
        href="/create"
        className="py-3 px-5 border border-blue-200 text-blue-300"
      >
        Add Product
      </a>
      <hr className="w-[80%]  my-3" />
      <h1 className="text-2xl font-semibold w-[80%] mb-3">Category</h1>
      <div className=" w-[80%]">
        {distinct_Category.map((c, i) => {
          return (
            <Link
              key={i}
              to={`/?category=${c}`}
              className="mb-3 flex items-center hover:font-semibold"
            >
              <span
                style={{ backgroundColor: color() }}
                className="rounded-full  w-[15px] h-[15px] mr-2"
              ></span>
              {c}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;

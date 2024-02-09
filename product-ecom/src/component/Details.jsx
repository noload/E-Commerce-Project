import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axios from "../utils/axios";
import { ProductContext } from "../utils/Context";
const Details = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useContext(ProductContext);
  const [p, setP] = useState(null);
  const { id } = useParams();

  // const getSingleProduct = async (id) => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);

  //     setP(data);
  //   } catch (error) {}
  // };

  const handleDelete = (id) => {
    console.log(id);
    const filteredProduct = product.filter((p) => p.id !== id);
    setProduct(filteredProduct);
    localStorage.setItem("product", JSON.stringify(filteredProduct));
    navigate("/");
  };

  useEffect(() => {
    if (product) {
      setP(product.filter((p) => p.id == id)[0]);
    }
    // getSingleProduct(id);
  }, []);

  return (
    <>
      {p ? (
        <div className="w-screen h-screen m-auto p-[10%] bg-slate-400 flex">
          <img
            className="h-[90%] w-96 p-5 shadow-2xl rounded-lg"
            src={`${p.image}`}
            alt=""
          />
          <div className="content  text-white ml-10 flex gap-3 flex-col h-[80%] w-[70%]">
            <h1 className="text-2xl font-semibold">{p.title}</h1>
            <h2 className="font-semibold ">${p.price}</h2>
            <p className="">
              <span className="font-semibold">Category</span> : {p.category}
            </p>
            <p>{p.description}</p>
            <p>
              {p.rating.rate}
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star-half"></i>
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                to={`/edit/${p.id}`}
                className="px-5 py-2 bg-blue-400 w-[15%] text-center rounded-lg font-semibold shadow-lg hover:bg-blue-500 transition-all ease-in-out duration-200"
              >
                Edit
              </Link>

              <button
                onClick={() => {
                  handleDelete(p.id);
                }}
                className="px-5 py-2 bg-blue-400 w-[15%] text-center rounded-lg font-semibold shadow-lg hover:bg-blue-500 transition-all ease-in-out duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;

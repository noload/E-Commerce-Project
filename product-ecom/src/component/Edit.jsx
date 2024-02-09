import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Edit = () => {
  const [product, setProduct] = useContext(ProductContext);
  const navigate = useNavigate();
  const [newp, setnewp] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });
  const { id } = useParams();
  const changeHandler = (e) => {
    setnewp({ ...newp, [e.target.name]: e.target.value });
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      newp.title.trim().length < 4 ||
      newp.image.trim().length < 4 ||
      newp.category.trim().length < 4 ||
      newp.price.length < 1 ||
      newp.description.trim().length < 4
    ) {
      alert("All field are required");
      return;
    }

    const pi = product.findIndex((p) => p.id == id);

    const copyData = [...product];
    copyData[pi] = { ...copyData[pi], ...newp };

    setProduct(copyData);
    localStorage.setItem("product", JSON.stringify(copyData));
    navigate(-1);
  };
  useEffect(() => {
    setnewp(product.filter((p) => p.id == id)[0]);
  }, [id]);

  return (
    <form
      onSubmit={addProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-5xl ">Edit New Product</h1>
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="title"
        onChange={(e) => {
          changeHandler(e);
        }}
        value={newp?.title}
      />
      <input
        type="url"
        placeholder="image  link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="image"
        onChange={(e) => {
          changeHandler(e);
        }}
        value={newp?.image}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          name="category"
          onChange={(e) => {
            changeHandler(e);
          }}
          value={newp?.category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          name="price"
          onChange={(e) => {
            changeHandler(e);
          }}
          value={newp?.price}
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="description"
        onChange={(e) => {
          changeHandler(e);
        }}
        value={newp?.description}
        placeholder="Enter product description here ..."
        rows="7"
      ></textarea>
      <button className="py-3 items-start px-5 border border-blue-200 text-blue-300">
        Add Product
      </button>
    </form>
  );
};

export default Edit;

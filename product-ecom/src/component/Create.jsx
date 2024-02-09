import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useContext(ProductContext);
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 4 ||
      image.trim().length < 4 ||
      category.trim().length < 4 ||
      price.trim().length < 1 ||
      description.trim().length < 4
    ) {
      alert("All field are required");
      return;
    }
    const p = {
      id: nanoid(),
      title,
      image,
      price,
      category,
      description,
      rating: {
        rate: 4.5,
      },
    };
    setProduct([...product, p]);
    localStorage.setItem("product", JSON.stringify([...product, p]));
    navigate("/");
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-5xl ">Add New Product</h1>
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <input
        type="url"
        placeholder="image  link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => {
          setImage(e.target.value);
        }}
        value={image}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[49%] mb-3"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        placeholder="Enter product description here ..."
        rows="7"
      ></textarea>
      <button className="py-3 items-start px-5 border border-blue-200 text-blue-300">
        Add Product
      </button>
    </form>
  );
};

export default Create;

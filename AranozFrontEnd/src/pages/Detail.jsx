import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

const Detail = () => {
  const { data, setData } = useContext(ProductsContext);
  const { productId } = useParams();
  const getProduct = async () => {
    try {
      const res = await axios("http://localhost:5000/furnitures/" + productId);
      setData(res?.data);

    } catch (error) {
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log(data);

  return (
    <>
        <div className="mx-20 my-5 shadow-md justify-content-center flex flex-wrap">
          <div className=" relative mb-5  w-80 flex-col  bg-white bg-clip-border text-gray-700 shadow-md">
            <img  src={data.img} alt="" />
          </div>
          <div className="ml-0">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Title: {data.title}
            </h5>
            <p className="block text-xl font-semibold font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Price: {data.price}$
            </p>
            <p style={{width:"300px", fontSize:"20px"}} className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rerum cupiditate adipisci aliquid veniam cumque maxime
              nesciunt at iste sequi expedita esse ab aut est eum inventore
              odio, velit sed. Natus?
            </p>
          </div>
        </div>
    </>
  );
};

export default Detail;

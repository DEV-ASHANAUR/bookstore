"use client";

import { StoreContext } from "@/app/context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { toast } from "react-toastify";

export const AddToCart = ({ book }) => {
  const { cartData, setCartData } = useContext(StoreContext);
  console.log("cart data", cartData);
  const handleAddToCart = (e, reason) => {
    e.preventDefault();

    const newData = { ...book, type: reason };
    const found = cartData.find((item) => {
      return item.id == book.id;
    });

    if (!found) {
      setCartData([...cartData, newData]);
      toast.success(`Added ${book.title} to the Cart`, {
        autoClose: 1000,
        position: "top-right",
      });
    } else {
      toast.error(`OOPS!! You have added ${book.title} already to the Cart`, {
        position: "top-right",
      });
    }
  };
  return (
    <div className="flex justify-around items-center">
      <button className="uppercase flex gap-2 bg-indigo-500 hover:bg-indigo-600 transition-all rounded-sm text-white px-3 py-2" onClick={(e)=>handleAddToCart(e,"buy")}>
        <ShoppingCartIcon className="w-5" />
        to Buy
      </button>
      <button className="uppercase flex gap-2 bg-purple-500 hover:bg-purple-600 transition-all rounded-sm text-white px-3 py-2" onClick={(e)=>handleAddToCart(e,"rent")}>
        <ShoppingCartIcon className="w-5" />
        to Rent
      </button>
    </div>
  );
};

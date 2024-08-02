"use client";
import { StoreContext } from "@/app/context";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { toast } from "react-toastify";

const CartItems = () => {
  const { cartData, setCartData } = useContext(StoreContext);
  console.log(cartData);
  const removeItem = (e,id,title)=>{
    e.preventDefault();
    
    const filteredItem = cartData.filter((item)=>item.id !== id);

    setCartData([...filteredItem]);

    toast.success(`${title} has been removed from the Cart successfully!`, {
        autoClose: 1000,
        position: "top-right"
      });


  }
  return (
    <div className="flex flex-col px-6 py-7 gap-2 bg-white w-full max-w-xs shadow-md">
      <h1 className="capitalize text-3xl mb-3 text-center font-bold">{cartData.length} Item in this Cart</h1>
      {cartData.map((book, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-1 bg-gray-300 px-3 py-2 rounded-sm"
        >
          <div className="flex items-center gap-3">
            <div className="h-[30px] w-[30px] rounded-full bg-black text-white flex justify-center items-center">
              {book?.type === "buy" ? "B":"R"}
            </div>
            <p className="capitalize">{book.title}</p>
          </div>
          <button className="text-red-600 hover:text-red-700 transition-all duration-150" onClick={(e)=>removeItem(e,book.id,book.title)}>
            <TrashIcon className="w-6" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;

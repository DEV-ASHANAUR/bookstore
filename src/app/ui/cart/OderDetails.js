"use client";
import { StoreContext } from "@/app/context";
import { TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const { cartData, setCartData } = useContext(StoreContext);
  console.log(cartData);

  const bookToBuy = cartData.filter((item) => item.type === "buy");

  const priceToBuy = bookToBuy.reduce((accumulator, book) => {
    return accumulator + book.sellPrice;
  }, 0);

  const bookToRent = cartData.filter((item) => item.type == "rent");

  const priceToRent = bookToRent.reduce((accumulator, book) => {
    return accumulator + book.rentPrice;
  }, 0);

  console.log(priceToRent);

  const DeliveryCharge = 29;

  return (
    <div className="flex flex-col px-6 py-7 gap-2 bg-white w-full max-w-xs shadow-md">
      <h1 className="capitalize text-3xl mb-3 text-center font-bold">Order Details</h1>
      {bookToBuy.length > 0 || bookToRent.length > 0 ? (
        <>
          <div className="font-semibold capitalize flex flex-col items-center gap-2">
            {bookToBuy.length > 0 && (
              <p>
                Buing {bookToBuy.length} book(s) for {priceToBuy} TK
              </p>
            )}

            {bookToRent.length > 0 && (
              <p>
                Renting {bookToRent.length} book(s) for {priceToRent} TK
              </p>
            )}
            <p>Delivery Charge {DeliveryCharge} TK</p>
          </div>
          <hr className="my-4" />
          <div className="font-semibold capitalize flex flex-col items-center gap-2">
            <p>Total Amount to pay</p>
            <h1 className="text-2xl">{priceToBuy + priceToRent + DeliveryCharge} Tk</h1>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-center text-red-700 capitalize font-semibold">
            No Book in the cart!
          </p>
          <Link
            href="/store"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go To Store
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;

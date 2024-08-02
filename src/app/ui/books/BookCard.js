import {
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
  CurrencyBangladeshiIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { AddToCart } from "./AddToCart";
import Link from "next/link";

export function BookCard({ book }) {
  return (
    <Link href="/">
      <div className="flex flex-col bg-white py-4 px-4 rounded-sm">
        <div className="flex justify-center items-center w-full mb-2">
          <Image
            src={book.cover}
            width="150"
            height="100"
            style={{ width: "auto", height: "200px", objectFit: "cover" }}
            alt={book.title}
          />
        </div>
        <h1 className="text-center text-xl">{book.title}</h1>
        <div className="flex items-center justify-around my-4">
          {book.stock ? (
            <div className="flex gap-2 items-center">
              <ArchiveBoxIcon className="w-5 text-green-700" />{" "}
              <p> {book.stock} in Stock</p>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <ArchiveBoxXMarkIcon className="w-5 text-red-700" />{" "}
              <p> No Stock</p>
            </div>
          )}
          <div className="flex gap-2 items-center">
            <CurrencyBangladeshiIcon className="w-5 text-purple-700" />
            <p>{book.sellPrice} to buy</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="capitalize text-center">
            Rent for {book.rentPrice} taka per month
          </p>
          <p className="capitalize text-center">
            {book.isRented
              ? `currenty ${book?.renterIds?.length} people rent this book`
              : `Currently no one rent this this.`}
          </p>
        </div>
        <hr className="w-full my-4" />
        <AddToCart book={book} />
      </div>
    </Link>
  );
}

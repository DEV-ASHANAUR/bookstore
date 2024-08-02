import Image from "next/image";
import background from "../../public/home/book-bg.png";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex relative flex-col justify-center items-center h-screen">
      <Image
        src={background}
        fill
        alt="background"
        sizes="100vw"
        style={{ objectFit: "cover" }}
        quality={100}
        className="blur-sm"
      />

      <div className="flex flex-col justify-center items-center bg-white z-10 h-1/4 p-2 rounded-sm lg:w-2/5 md:w-2/5 sm:w-2/5 xs-w-2/5">
        <div className="flex items-center text-purple-700 ">
          <SparklesIcon className="w-12 h-12" />
          <p className="text-[28px]">BookStore</p>
        </div>
        <div className="uppercase mt-5">
          <Link href="/store" className="bg-purple-700 p-2 text-white hover:bg-purple-600">Go to the bookstore</Link>
        </div>
      </div>
    </div>
  );
}

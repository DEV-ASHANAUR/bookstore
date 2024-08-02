"use client"
import { StoreContext } from "@/app/context";
import {
  HomeIcon,
  UserGroupIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  RectangleStackIcon,
  CogIcon,
  TruckIcon,
  Squares2X2Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { useContext } from "react";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Books", href: "/store", icon: BookOpenIcon },
  { name: "Sell or Lend", href: "/store/sell-lend", icon: RectangleStackIcon },
  { name: "Cart", href: "/store/cart", icon: ShoppingCartIcon },
  { name: "Track Order", href: "/store/track-order", icon: TruckIcon },
  { name: "Community", href: "/store/community", icon: UserGroupIcon },
  { name: "Settings", href: "/store/settings", icon: CogIcon },
  { name: "About", href: "/store/about", icon: Squares2X2Icon },
  { name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },
];
const NavLinks = () => {
  const {cartData,setCartData} = useContext(StoreContext);
  return (
    <>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link href={link.href} key={link.name} className="flex h-[48px] grow bg-gray-50 rounded-md md:rounded-none text-sm font-medium p-3 hover:bg-sky-100 hover:text-purple-600 justify-center items-center md:justify-start md:px-5 gap-2  transition-all">
            <IconComponent className="w-6" />
            <p className="hidden md:block">{
              (link.name == "Cart" && cartData && cartData.length > 0 ? `${link.name} (${cartData.length})`:link.name)
            }</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;

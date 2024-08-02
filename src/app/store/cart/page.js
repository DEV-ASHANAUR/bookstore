import CartItems from "@/app/ui/cart/CartItems";
import OrderDetails from "@/app/ui/cart/OderDetails";
import { Payment } from "@/app/ui/cart/Payment";

const CartPage = () => {
  return (
    <div className="px-4 py-3">
      <div className="flex flex-wrap gap-3 ">
        <CartItems />
        <OrderDetails />
        <Payment />
      </div>
    </div>
  );
};

export default CartPage;

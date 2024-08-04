import StoreProvider from "../provider";
import Navbar from "../ui/navbar/Navbar";
import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "BookStore - Buy or Rent Books",
  description: "An Online Bookstore to Sell and Rent Used Books",
};

export default function BookStoreLayout({ children, modal }) {
  return (
    <StoreProvider>
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-start flex-col md:flex-row">
          <Sidebar />
          <div className="md:grow">{children}</div>
        </div>
        {modal}
        <div id="modal-root-id" />
      </div>
    </StoreProvider>
  );
}

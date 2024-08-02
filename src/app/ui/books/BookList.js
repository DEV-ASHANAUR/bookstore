import { getAllBooks } from "@/app/db/quries";
import { BookCard } from "./BookCard";

const BookList = async () => {
  const books = await getAllBooks();
  console.log("books", books);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {books.map((item) => (
        <BookCard key={item.id} book={item} />
      ))}
    </div>
  );
};

export default BookList;

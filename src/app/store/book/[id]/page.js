import { getBookById } from "@/app/db/quries";
import BookDetails from "@/app/ui/books/BookDetails";

const BookDetailsPage = async ({ params: { id } }) => {
  const book = await getBookById(id);
  console.log(book);
  return <BookDetails book={book} />;
};

export default BookDetailsPage;

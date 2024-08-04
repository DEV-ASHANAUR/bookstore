import { getBookById } from "@/app/db/quries";
import BookDetails from "@/app/ui/books/BookDetails";
import Modal from "@/app/ui/books/Modal";

const BookModal = async ({ params: { id } }) => {
  const book = await getBookById(id);

  return (
    <Modal>
      <BookDetails book={book} />
    </Modal>
  );
};

export default BookModal;

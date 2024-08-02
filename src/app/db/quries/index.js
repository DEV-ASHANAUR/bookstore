import { BookModel } from "@/app/models/book-model";
import { mongoReplaceIdInArray, mongoReplaceIdInObject } from "@/app/utils/data.utils";

export async function getAllBooks() {
  const books = await BookModel.find().lean();
  return mongoReplaceIdInArray(books);
}

export async function getBookById(id) {
    const book = await BookModel.findById(id).lean();
    return mongoReplaceIdInObject(book);
  }

import { IBook } from "../model/book";

export class BookMock implements IBook {
  id: number = +new Date();
  author: string = "author";
  date: Date = new Date();
  feedback: string = "feedback";
  image: string | null = null;
  isbn: number = 123;
  name: string = "name";
  note: string | null = "note";
  pages: number | null = 123123;
  publisher: string = "publisher";
  rating: number | null = 222;
  title: string = "title";
}

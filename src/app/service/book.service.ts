import {Injectable} from "@angular/core";
import {IBook} from "../model/book";
import {BehaviorSubject} from "rxjs";
import {BookMock} from "../mock/books.mock";

@Injectable({ providedIn: "root" })
export class BookService {
  private readonly storage$$: BehaviorSubject<IBook[]> = new BehaviorSubject<
    IBook[]
  >([new BookMock()]);
  public readonly storage$ = this.storage$$.pipe();

  public add(book: IBook) {
    console.log("aded book", book);
    this.storage$$.next(this.storage$$.getValue().concat([book]));
  }

  public saveBook(book: IBook) {
    console.log("saveBook", book);
    const books = [...this.storage$$.getValue()];
    const updatedIndex = books.findIndex((el, index) => el.id === book.id);
    books[updatedIndex] = book;
    this.storage$$.next(books);
  }

  public getBook(id: number): IBook | null {
    const book = this.storage$$.getValue().find((book) => book.id === id);
    return book ? book : null;
  }
}

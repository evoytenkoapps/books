import { Injectable } from "@angular/core";
import { IBook } from "../model/book";
import { BehaviorSubject } from "rxjs";
import { BookMock } from "../mock/books.mock";

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

  public getBook(id: number): IBook {
    return this.storage$$.getValue().find((book) => book.id === id);
  }
}

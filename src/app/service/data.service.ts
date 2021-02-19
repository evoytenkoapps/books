import { Injectable } from "@angular/core";
import { IBook } from "../model/book";
import { BehaviorSubject, Subject } from "rxjs";
import { BookMock } from "../mock/books.mock";

@Injectable({ providedIn: "root" })
export class DataService {
  private readonly storage$$: BehaviorSubject<IBook[]> = new BehaviorSubject<
    IBook[]
  >([new BookMock()]);
  public readonly storage$ = this.storage$$.pipe();

  public add(book: IBook) {
    console.log("aded book", book);
    this.storage$$.next(this.storage$$.getValue().concat([book]));
  }
}

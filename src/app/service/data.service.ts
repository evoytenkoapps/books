import { Injectable } from "@angular/core";
import { IBook } from "../model/book";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class DataService {
  private storage$: BehaviorSubject<IBook> = new BehaviorSubject<IBook>(null);

  public add(book: IBook) {
    console.log("book aded", book);
    this.storage$.next(book);
  }
}

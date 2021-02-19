import { Component, OnInit } from "@angular/core";
import { BookService } from "../../service/book.service";
import { IBook } from "../../model/book";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { BookMock } from "../../mock/books.mock";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book.component.html",
  styleUrls: ["./edit-book.component.styl"],
})
export class EditBookComponent implements OnInit {
  public getBook$ = new Subject();
  public book$: Observable<IBook>;
  public isEdit$ = new BehaviorSubject<boolean>(false);

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.book$ = this.bookService.storage$.pipe(
      map((books) =>
        books.find((book) => book.id === +this.router.url.split("/")[2])
      ),
      tap((book) => console.log("bookis", book))
    );
  }

  public edit() {
    this.isEdit$.next(true);
  }

  public save(book: IBook) {
    console.log("save", book);
    this.isEdit$.next(false);
    this.bookService.saveBook(book);
  }
}

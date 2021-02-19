import { Component, OnInit } from "@angular/core";
import { BookService } from "../../service/book.service";
import { IBook } from "../../model/book";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { BookMock } from "../../mock/books.mock";

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book.component.html",
  styleUrls: ["./edit-book.component.styl"],
})
export class EditBookComponent implements OnInit {
  public getBook$ = new Subject();
  public book: IBook;
  public isEdit$ = new BehaviorSubject<boolean>(false);

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.book = this.bookService.getBook(+this.router.url.split("/")[2]);
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

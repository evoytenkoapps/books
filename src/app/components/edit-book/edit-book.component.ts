import { Component, OnInit } from "@angular/core";
import { BookService } from "../../service/book.service";
import { IBook } from "../../model/book";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { BookMock } from "../../mock/books.mock";

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book.component.html",
  styleUrls: ["./edit-book.component.styl"],
})
export class EditBookComponent implements OnInit {
  public getBook$ = new Subject();
  public book: IBook;

  constructor(private data: BookService, private router: Router) {}

  ngOnInit() {
    this.book = this.data.getBook(+this.router.url.split("/")[2]);
  }

  public getBook() {}
}

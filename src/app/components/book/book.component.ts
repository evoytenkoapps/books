import { Component, Input, OnInit } from "@angular/core";
import { IBook } from "../../model/book";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.styl"],
})
export class BookComponent implements OnInit {
  @Input() book: IBook;

  constructor() {}

  ngOnInit() {
    console.log("book is", this.book);
  }
}

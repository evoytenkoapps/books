import { Component, OnInit } from "@angular/core";
import { BookService } from "../../service/book.service";
import { IBook } from "../../model/book";
import { BehaviorSubject, Subject } from "rxjs";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.styl"],
})
export class AddBookComponent implements OnInit {
  public addBook$ = new Subject();
  public book: IBook;
  public isEdit$ = new BehaviorSubject(true);

  constructor(private dataService: BookService) {}

  ngOnInit() {
    this.book = {
      note: "",
      feedback: "",
      rating: null,
      pages: null,
      date: new Date(),
      isbn: null,
      publisher: "",
      author: "",
      title: "",
      image: "",
      name: "",
      id: +new Date(),
    };
  }

  public addBook() {
    this.addBook$.next();
  }

  public onAddBook(book: IBook) {
    this.dataService.add(book);
  }
}

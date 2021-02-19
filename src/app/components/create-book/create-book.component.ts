import { Component, EventEmitter, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../service/data.service";
import { IBook } from "../../model/book";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-create-book",
  templateUrl: "./create-book.component.html",
  styleUrls: ["./create-book.component.styl"],
})
export class CreateBookComponent implements OnInit {
  public addBook$ = new Subject();
  public book: IBook;

  constructor(private dataService: DataService) {}

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

import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {IBook} from '../../model/book';
import {Subject} from 'rxjs';

@Component({
  selector: "app-create-book",
  templateUrl: "./create-book.component.html",
  styleUrls: ["./create-book.component.styl"],
})
export class CreateBookComponent implements OnInit {
  public addBook$ = new Subject();
  public book: IBook;

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

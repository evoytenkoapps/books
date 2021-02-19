import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data.service";
import { Observable } from "rxjs";
import { IBook } from "../../model/book";
import { Route, Router } from "@angular/router";
import { MyRoutes } from "../../model/routes";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.styl"],
})
export class BooksComponent implements OnInit {
  public books$: Observable<IBook[]>;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.books$ = this.dataService.storage$;
  }

  onShowBook(book: IBook) {
    this.router.navigate([MyRoutes.BOOK, book.id]);
  }
}

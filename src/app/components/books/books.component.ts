import {Component, OnInit} from "@angular/core";
import {BookService} from "../../service/book.service";
import {Observable} from "rxjs";
import {IBook} from "../../model/book";
import {Router} from "@angular/router";
import {MyRoutes} from "../../model/routes";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.styl"],
})
export class BooksComponent implements OnInit {
  public books$: Observable<IBook[]>;

  constructor(private dataService: BookService, private router: Router) {}

  ngOnInit() {
    this.books$ = this.dataService.storage$;
  }

  onShowBook(book: IBook) {
    this.router.navigate([MyRoutes.BOOK, book.id]);
  }
}

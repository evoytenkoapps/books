import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data.service";
import { Observable } from "rxjs";
import { IBook } from "../../model/book";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.styl"],
})
export class BooksComponent implements OnInit {
  public books$: Observable<IBook[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.books$ = this.dataService.storage$;
  }
}

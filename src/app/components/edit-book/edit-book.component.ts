import { Component, OnInit, ViewChild } from "@angular/core";
import { BookService } from "../../service/book.service";
import { IBook } from "../../model/book";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { EditBookFormComponent } from "../edit-book-form/edit-book-form.component";

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book.component.html",
  styleUrls: ["./edit-book.component.styl"],
})
export class EditBookComponent implements OnInit {
  @ViewChild("editBookFormComponent", { static: true })
  editBookFormComponent: EditBookFormComponent;
  public book$: Observable<IBook>;
  public isEdit = false;

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
    this.isEdit = true;
  }

  public save() {
    const form = this.editBookFormComponent.bookFormGroup;
    if (form.valid) {
      console.log("save");
      this.isEdit = false;
      this.bookService.saveBook(form.getBook());
    } else {
      this.editBookFormComponent.bookFormGroup.markAllAsTouched();
    }
  }
}

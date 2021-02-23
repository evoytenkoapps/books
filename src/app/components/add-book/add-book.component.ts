import {Component, OnInit, ViewChild} from "@angular/core";
import {BookService} from "../../service/book.service";
import {IBook} from "../../model/book";
import {EditBookFormComponent} from "../edit-book-form/edit-book-form.component";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.styl"],
})
export class AddBookComponent implements OnInit {
  @ViewChild("editBookFormComponent", { static: true })
  private editBookFormComponent: EditBookFormComponent;
  public book: IBook;
  public isEdit = true;

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
      image: null,
      name: "",
      id: +new Date(),
    };
  }

  public addBook() {
    this.editBookFormComponent.validateBook();
  }

  public onAddBook(book: IBook) {
    this.dataService.add(book);
    this.editBookFormComponent.rest();
  }
}

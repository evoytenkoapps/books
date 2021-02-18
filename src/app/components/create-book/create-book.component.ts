import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../service/data.service";
import { IBook } from "../../model/book";

@Component({
  selector: "app-create-book",
  templateUrl: "./create-book.component.html",
  styleUrls: ["./create-book.component.styl"],
})
export class CreateBookComponent implements OnInit {
  public profileForm = new FormGroup({
    name: new FormControl("", [Validators.maxLength(1), Validators.required]),
    image: new FormControl(""),
    title: new FormControl(""),
    author: new FormControl(""),
    publisher: new FormControl(""),
    isbn: new FormControl(""),
    data: new FormControl(""),
    pages: new FormControl(""),
    rating: new FormControl(""),
    feedback: new FormControl(""),
    note: new FormControl(""),
  });
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  public addBook() {
    if (this.isFormValid()) {
      const controls = this.profileForm.controls;
      const book: IBook = {
        author: controls["author"].value,
        data: controls["data"].value,
        feedback: controls["feedback"].value,
        image: controls["image"].value,
        isbn: controls["isbn"].value,
        name: controls["name"].value,
        note: controls["note"].value,
        pages: controls["pages"].value,
        publisher: controls["publisher"].value,
        rating: controls["rating"].value,
        title: controls["title"].value,
      };

      this.dataService.add(book);
    }
  }

  private isFormValid(): boolean {
    console.log("isFormValid");
    for (let control in this.profileForm.controls) {
      if (this.profileForm.controls[control].invalid) {
        return false;
      }
    }
    return true;
  }
}

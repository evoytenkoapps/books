import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { IBook } from "../../model/book";
import { BookControls, IBaseBook, IBookControls } from "./book-controls";
import { FormGroup } from "@angular/forms";
import { BookFormGroup } from "./book-form-group";

@Component({
  selector: "app-edit-book-form",
  templateUrl: "./edit-book-form.component.html",
  styleUrls: ["./edit-book-form.component.styl"],
})
export class EditBookFormComponent implements OnInit, OnChanges {
  @Input() book: IBook;
  @Input() isEdit: boolean;

  public bookControls: IBookControls;
  public bookFormGroup: BookFormGroup;

  constructor() {}

  ngOnInit() {
    this.bookFormGroup = new BookFormGroup(this.book);
    this.bookControls = this.bookFormGroup.controls;
    this.isEdit ? this.bookFormGroup.enable() : this.bookFormGroup.disable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);

    if (changes.isEdit && this.bookFormGroup) {
      changes.isEdit.currentValue ? this.bookFormGroup.enable() : this.bookFormGroup.disable();
    }
  }

  public onUpLoadAvatar(files: FileList) {
    console.log("files", files);
    const file: File = files.item(0);
    const reader = new FileReader();
    reader.onloadend = () => {
      let base64String;
      // use a regex to remove data url part
      if (typeof reader.result === "string") {
        base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      }
      this.bookControls.image.setValue(base64String);
    };
    reader.readAsDataURL(file);
  }

  public rest() {
    this.bookFormGroup.reset();
  }
}

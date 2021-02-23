import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { IBook } from "../../model/book";
import { BookControls, IBaseBook } from "./book-controls";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-edit-book-form",
  templateUrl: "./edit-book-form.component.html",
  styleUrls: ["./edit-book-form.component.styl"],
})
export class EditBookFormComponent implements OnInit, OnChanges {
  @Input() book: IBook;
  @Input() isEdit: boolean;
  @Output() bookChange: EventEmitter<IBook> = new EventEmitter<IBook>();

  public bookControls: BookControls;
  public bookFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.bookControls = new BookControls(this.book);
    this.bookFormGroup = new FormGroup({ ...this.bookControls });
    this.isEdit ? this.bookFormGroup.enable() : this.bookFormGroup.disable();
  }

  public validateBook() {
    if (this.isFormValid()) {
      const baseBook: IBaseBook = this.bookControls.getBook();
      const book: IBook = { ...baseBook, id: this.book.id };
      console.log("changeBook", book);
      this.bookChange.emit(book);
    } else {
      this.bookFormGroup.markAllAsTouched();
    }
  }

  private isFormValid(): boolean {
    console.log("isFormValid");
    for (const control in this.bookFormGroup.controls) {
      if (this.bookFormGroup.controls[control].invalid) {
        return false;
      }
    }
    return true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);

    if (changes.isEdit && this.bookFormGroup) {
      changes.isEdit.currentValue
        ? this.bookFormGroup.enable()
        : this.bookFormGroup.disable();
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

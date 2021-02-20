import * as moment from "moment";
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
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-book-form",
  templateUrl: "./edit-book-form.component.html",
  styleUrls: ["./edit-book-form.component.styl"],
})
export class EditBookFormComponent implements OnInit, OnChanges {
  @Input() book: IBook;
  @Input() isEdit: boolean;
  @Output() bookChange: EventEmitter<IBook> = new EventEmitter<IBook>();

  private dateTemplate = "DD.MM.YYYY";

  public profileForm: FormGroup;
  public nameControl: FormControl;
  public imageControl: FormControl;
  public titleControl: FormControl;
  public authorControl: FormControl;
  public publisherControl: FormControl;
  public isbnControl: FormControl;
  public dateControl: FormControl;
  public pagesControl: FormControl;
  public ratingControl: FormControl;
  public feedbackControl: FormControl;
  public noteControl: FormControl;

  constructor() {}

  ngOnInit() {
    this.nameControl = new FormControl(this.book.name, [Validators.required]);
    this.imageControl = new FormControl(this.book.image);
    this.titleControl = new FormControl(this.book.title, Validators.required);
    this.authorControl = new FormControl(this.book.author, Validators.required);
    this.publisherControl = new FormControl(
      this.book.publisher,
      Validators.required
    );
    this.isbnControl = new FormControl(this.book.isbn);
    this.dateControl = new FormControl(
      this.book.date
        ? moment(this.book.date).format(this.dateTemplate)
        : this.book.date,
      [
        Validators.required,
        Validators.pattern(
          /^(0?[1-9]|[12][0-9]|3[01])[.](0?[1-9]|1[012])[.]\d{4}$/
        ),
      ]
    );

    this.pagesControl = new FormControl(
      this.book.pages,
      Validators.pattern(
        /^(0?[1-9]|[12][0-9]|3[01])[.](0?[1-9]|1[012])[.]\d{4}$/
      )
    );
    this.ratingControl = new FormControl(
      this.book.rating,
      Validators.pattern(/^[+]?([1-9]+(?:[\.][1-9]*)?|\.[1-9]+)$/)
    );
    this.feedbackControl = new FormControl(this.book.feedback);
    this.noteControl = new FormControl(this.book.note);

    this.profileForm = new FormGroup({
      name: this.nameControl,
      image: this.imageControl,
      title: this.titleControl,
      author: this.authorControl,
      publisher: this.publisherControl,
      isbn: this.isbnControl,
      date: this.dateControl,
      pages: this.pagesControl,
      rating: this.ratingControl,
      feedback: this.feedbackControl,
      note: this.noteControl,
    });

    this.isEdit ? this.profileForm.enable() : this.profileForm.disable();
  }

  public validateBook() {
    if (this.isFormValid()) {
      const book: IBook = {
        id: this.book.id,
        author: this.authorControl.value,
        date: moment(this.dateControl.value, this.dateTemplate).toDate(),
        feedback: this.feedbackControl.value,
        image: this.imageControl.value,
        isbn: this.isbnControl.value,
        name: this.nameControl.value,
        note: this.noteControl.value,
        pages: this.pagesControl.value,
        publisher: this.publisherControl.value,
        rating: this.ratingControl.value,
        title: this.titleControl.value,
      };

      console.log("changeBook", book);
      this.bookChange.emit(book);
    } else {
      this.profileForm.markAllAsTouched();
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);

    if (changes.isEdit && this.profileForm) {
      changes.isEdit.currentValue
        ? this.profileForm.enable()
        : this.profileForm.disable();
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
      this.imageControl.setValue(base64String);
    };
    reader.readAsDataURL(file);
  }

  public rest() {
    this.profileForm.reset();
  }
}

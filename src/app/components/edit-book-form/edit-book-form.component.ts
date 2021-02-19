import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { IBook } from "../../model/book";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-edit-book-form",
  templateUrl: "./edit-book-form.component.html",
  styleUrls: ["./edit-book-form.component.styl"],
})
export class EditBookFormComponent implements OnInit, OnDestroy {
  @Input() book: IBook;
  @Input() checkBook$: Observable<void>;
  @Output() bookChange: EventEmitter<IBook> = new EventEmitter<IBook>();

  private componentDestroyed: Subject<any> = new Subject();

  public profileForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl(this.book.name, [
        Validators.maxLength(1),
        Validators.required,
      ]),
      image: new FormControl(this.book.image),
      title: new FormControl(this.book.title, Validators.required),
      author: new FormControl(this.book.author, Validators.required),
      publisher: new FormControl(this.book.publisher, Validators.required),
      isbn: new FormControl(this.book.isbn, Validators.required),
      date: new FormControl(this.book.date, Validators.required),
      pages: new FormControl(this.book.pages),
      rating: new FormControl(this.book.rating),
      feedback: new FormControl(this.book.feedback),
      note: new FormControl(this.book.note),
    });

    this.checkBook$
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(() => this.addBook());
  }

  private addBook() {
    if (this.isFormValid()) {
      const controls = this.profileForm.controls;
      const book: IBook = {
        id: +new Date(),
        author: controls["author"].value,
        date: controls["date"].value,
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

      this.profileForm.reset();
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

  ngOnDestroy(): void {
    this.componentDestroyed.next();
    this.componentDestroyed.complete();
  }
}

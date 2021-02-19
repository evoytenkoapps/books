import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { IBook } from "../../model/book";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-edit-book-form",
  templateUrl: "./edit-book-form.component.html",
  styleUrls: ["./edit-book-form.component.styl"],
})
export class EditBookFormComponent implements OnInit, OnDestroy, OnChanges {
  @Input() book: IBook;
  @Input() checkBook$: Observable<void>;
  @Input() isEnable$: Observable<boolean>;
  @Output() bookChange: EventEmitter<IBook> = new EventEmitter<IBook>();

  private componentDestroyed: Subject<any> = new Subject();

  public profileForm: FormGroup;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl(this.book.name, [Validators.required]),
      image: new FormControl(this.book.image),
      title: new FormControl(this.book.title, Validators.required),
      author: new FormControl(this.book.author, Validators.required),
      publisher: new FormControl(this.book.publisher, Validators.required),
      isbn: new FormControl(this.book.isbn),
      date: new FormControl(
        this.datePipe.transform(this.book.date, "dd.MM.yyyy"),
        [
          Validators.required,
          Validators.pattern(
            /^(0?[1-9]|[12][0-9]|3[01])[.](0?[1-9]|1[012])[.]\d{4}$/
          ),
        ]
      ),
      pages: new FormControl(this.book.pages),
      rating: new FormControl(this.book.rating),
      feedback: new FormControl(this.book.feedback),
      note: new FormControl(this.book.note),
    });

    this.checkBook$
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(() => this.changeBook());

    this.isEnable$
      .pipe(
        takeUntil(this.componentDestroyed),
        tap((isEnable) => console.log("isEnable", isEnable))
      )
      .subscribe((isEnable) =>
        isEnable ? this.profileForm.enable() : this.profileForm.disable()
      );
  }

  private changeBook() {
    if (this.isFormValid()) {
      const controls = this.profileForm.controls;
      const book: IBook = {
        id: this.book.id,
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

  ngOnDestroy(): void {
    this.componentDestroyed.next();
    this.componentDestroyed.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.book && this.profileForm) {
      console.log("changes", changes.book.currentValue);
      const book = changes.book.currentValue;
      const controls = this.profileForm.controls;

      for (let controlsKey in controls) {
        controls[controlsKey].setValue(book[controlsKey]);
      }
    }
  }
}

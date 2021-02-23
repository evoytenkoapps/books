import * as moment from "moment";
import { FormControl, Validators } from "@angular/forms";
import { IBook } from "../../model/book";

export const dateTemplate = "DD.MM.YYYY";
export type BaseBook = Exclude<keyof IBook, "id">;
export type BookFormControls = {
  [param in BaseBook]: FormControl;
};
export type IBaseBook = { [param in BaseBook]: any };

export interface IBookControls extends BookFormControls {
}

export class BookControls implements IBookControls {
  public author: FormControl;
  public date: FormControl;
  public feedback: FormControl;
  public image: FormControl;
  public isbn: FormControl;
  public name: FormControl;
  public note: FormControl;
  public pages: FormControl;
  public publisher: FormControl;
  public rating: FormControl;
  public title: FormControl;

  constructor(book: IBook) {
    this.name = new FormControl(book.name, [Validators.required]);
    this.image = new FormControl(book.image);
    this.title = new FormControl(book.title, Validators.required);
    this.author = new FormControl(book.author, Validators.required);
    this.publisher = new FormControl(book.publisher, Validators.required);
    this.isbn = new FormControl(book.isbn);
    this.date = new FormControl(
      book.date ? moment(book.date).format(dateTemplate) : book.date,
      [
        Validators.required,
        Validators.pattern(
          /^(0?[1-9]|[12][0-9]|3[01])[.](0?[1-9]|1[012])[.]\d{4}$/
        ),
      ]
    );

    this.pages = new FormControl(
      book.pages,
      Validators.pattern(/^[1-9]\d*$/)
    );
    this.rating = new FormControl(
      book.rating,
      Validators.pattern(/^[1-9]\d*$/)
    );
    this.feedback = new FormControl(book.feedback);
    this.note = new FormControl(book.note);
  }
}

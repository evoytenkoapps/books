import { FormGroup } from "@angular/forms";
import { BaseBook, BookControls, dateTemplate, IBaseBook } from "./book-controls";
import { IBook } from "../../model/book";
import * as moment from "moment";

export class BookFormGroup extends FormGroup {
  constructor(private book: IBook, public controls = { ...new BookControls(book) }) {
    super(controls);
  }

  getBook(): IBook {
    const baseBook = {
      rating: this.controls.rating.value,
      note: this.controls.note.value,
      date: moment(this.controls.date.value, dateTemplate).toDate(),
      pages: this.controls.pages.value,
      publisher: this.controls.publisher.value,
      title: this.controls.title.value,
      name: this.controls.name.value,
      isbn: this.controls.isbn.value,
      image: this.controls.image.value,
      feedback: this.controls.feedback.value,
      author: this.controls.author.value,
    } as IBaseBook;

    return { ...baseBook, id: this.book.id };
  }
}

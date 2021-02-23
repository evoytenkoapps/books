import {IBook} from "../model/book";

export class BookMock implements IBook {
  id: number = +new Date();
  author: string = "Евгений Войтенко";
  date: Date = new Date();
  feedback: string = "Бомба!";
  image: string | null = null;
  isbn: number = 123;
  name: string = "Открой меня и ты поймешь кому делать оффер";
  note: string | null = "note";
  pages: number | null = 123123;
  publisher: string = "publisher";
  rating: number | null = 100;
  title: string = "";
}

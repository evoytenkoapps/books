export interface IBook {
  readonly id: number;
  // Название(обязательное поле)
  readonly name: string;
  // Обложка книги(необязательное поле, если нет, то автоматически подставлять картинку “нет фото”)
  readonly image: string;
  // Описание(обязательное поле)
  readonly title: string;
  // Автор(обязательное поле)
  readonly author: string;
  // Издательство(обязательное поле)
  readonly publisher: string;
  // Код ISBN(обязательное поле)
  readonly isbn: number;
  // Год издания(обязательное поле)
  readonly date: Date;
  // Количество страниц(необязательное поле)
  readonly pages: number;
  // Рейтинг(необязательное поле, если рейтинга нет, выводить “пустые” звезды)
  readonly rating: number;
  // Отзывы тех, кто прочитал(необязательное поле)
  readonly feedback: string;
  // Личные заметки по книге(необязательное поле)
  readonly note: string;
}

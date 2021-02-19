import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateBookComponent } from "./components/create-book/create-book.component";
import { MyRoutes } from "./model/routes";
import { BooksComponent } from "./components/books/books.component";
import { EditBookComponent } from "./components/edit-book/edit-book.component";

const routes: Routes = [
  { path: MyRoutes.ADD, component: CreateBookComponent },
  { path: MyRoutes.MAIN, component: BooksComponent },
  { path: MyRoutes.MAIN, component: BooksComponent },
  { path: MyRoutes.BOOK + "/:id", component: EditBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

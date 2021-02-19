import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateBookComponent } from "./components/create-book/create-book.component";
import { MyRoutes } from "./model/routes";
import { BooksComponent } from "./components/books/books.component";

const routes: Routes = [
  { path: MyRoutes.ADD, component: CreateBookComponent },
  { path: MyRoutes.MAIN, component: BooksComponent },
  { path: MyRoutes.MAIN, component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

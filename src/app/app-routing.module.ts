import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateBookComponent } from "./components/create-book/create-book.component";
import { MyRoutes } from "./model/routes";

const routes: Routes = [
  { path: MyRoutes.EDIT, component: CreateBookComponent },
  { path: MyRoutes.MAIN, component: CreateBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

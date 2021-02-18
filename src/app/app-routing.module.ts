import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateBookComponent } from "./components/create-book/create-book.component";

const routes: Routes = [
  { path: "edit", component: CreateBookComponent },
  { path: "**", component: CreateBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

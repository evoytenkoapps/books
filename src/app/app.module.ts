import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateBookComponent } from "./components/create-book/create-book.component";
import { ReactiveFormsModule } from "@angular/forms";
import { KeysPipe } from "./pipes/keys.pipe";

@NgModule({
  declarations: [AppComponent, CreateBookComponent, KeysPipe],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

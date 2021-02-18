import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateBookComponent } from "./components/create-book/create-book.component";
import { ReactiveFormsModule } from "@angular/forms";
import { KeysPipe } from "./pipes/keys.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [AppComponent, CreateBookComponent, KeysPipe],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

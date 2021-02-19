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
import { ToolBarComponent } from "./components/tool-bar/tool-bar.component";
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [AppComponent, CreateBookComponent, KeysPipe, ToolBarComponent, SideNavComponent],
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

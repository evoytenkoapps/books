import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateBookComponent} from './components/create-book/create-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import {KeysPipe} from './pipes/keys.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ToolBarComponent} from './components/tool-bar/tool-bar.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {BookComponent} from './components/book/book.component';
import {BooksComponent} from './components/books/books.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';
import {EditBookFormComponent} from './components/edit-book-form/edit-book-form.component';

@NgModule({
  declarations: [AppComponent, CreateBookComponent, KeysPipe, ToolBarComponent, SideNavComponent, BookComponent, BooksComponent, EditBookComponent, EditBookFormComponent],
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

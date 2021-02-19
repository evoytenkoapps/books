import { Component, OnInit, ViewChild } from "@angular/core";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { Router } from "@angular/router";
import { MatSidenavContainer } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"],
})
export class AppComponent implements OnInit {
  public opened = false;
  title = "books";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((data) => (this.opened = false));
  }
}

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

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

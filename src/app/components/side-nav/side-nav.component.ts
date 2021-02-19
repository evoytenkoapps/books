import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MyRoutes} from '../../model/routes';

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.styl"],
})
export class SideNavComponent implements OnInit {
  public routes: any = MyRoutes;

  constructor(private router: Router) {}

  ngOnInit() {}

  public onRoute(data: MyRoutes) {
    this.router.navigate([data]);
  }
}

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { BookService } from "../service/book.service";
import { MyRoutes } from "../model/routes";

@Injectable({ providedIn: "root" })
export class EditBookGuard implements CanActivate {
  constructor(private router: Router, private bookService: BookService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.bookService.getBook(+state.url.split("/")[2])) {
      return true;
    } else {
      this.router.navigate([MyRoutes.MAIN]);
      return false;
    }
  }
}

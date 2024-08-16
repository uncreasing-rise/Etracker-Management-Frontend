import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'; // Adjust the path to your AuthService

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const expectedRole = route.data['expectedRole']; // This is the role expected to access the route
    const userRole = this.authService.getRole(); // Get the user's role from AuthService

    if (userRole === expectedRole) {
      return true; // Allow access if roles match
    } else {
      this.router.navigate(['/login']); // Redirect to login if roles don't match
      return false;
    }
  }
}

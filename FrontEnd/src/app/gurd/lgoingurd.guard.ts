import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class LgoingurdGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      localStorage.getItem('token') == null &&
      localStorage.getItem('email') == null
    ) {
      Swal.fire({
        title: 'Error',
        text: `Please Login`,
        icon: 'error',
      }).then(() => {
        window.location.reload();
      });
      return false;
    } else {
      return true;
    }
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(public http: HttpClient,
              public router: Router) { }

  public getAdmin() {
    return this.http.get('http://localhost:3000/user');
  }

  public addUserInLocalStorage(user) {
    const store = JSON.stringify(user);
    localStorage.setItem('admin', store);
  }

  public logOut() {
    localStorage.removeItem('admin');
    this.router.navigate(['/']);
  }

  public isAuthorization() {
    const user = JSON.parse(localStorage.getItem('admin'));
    if (user != null) {
      return true;
    } else {
      return false;
    }
  }

}

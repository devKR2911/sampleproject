import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //public isAuthendicated = window.sessionStorage.getItem("isAuthenticated") ?  true : false;
  public isAuthendicated = false;
  private authStatus = new BehaviorSubject(this.isAuthendicated);
  authListerner = this.authStatus.asObservable();
  public onAuthendicate() {
    //window.sessionStorage.setItem("isAuthenticated", "true");
    this.isAuthendicated = true;
    this.authStatus.next(this.isAuthendicated);
  }

  public clearAuth()
  {
    this.isAuthendicated = false;
    this.authStatus.next(this.isAuthendicated);
    //window.sessionStorage.clear();
  }
  


}

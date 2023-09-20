import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn() {

    const token = localStorage.getItem('flagvalue'); // get token from local storage
    return token
  }
}

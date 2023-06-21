import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserName() {
    return localStorage.getItem('userName');
  }

  setUserName(userName: string) {
    localStorage.setItem('userName', userName);
  }

  removeUserName() {
    localStorage.removeItem('userName');
  }

  getLevel() {
    return localStorage.getItem('level');
  }

  setLevel(level: string) {
    localStorage.setItem('level', level);
  }

  removeLevel() {
    localStorage.removeItem('level');
  }

}

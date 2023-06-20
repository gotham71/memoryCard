import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userName = '';

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    localStorage.setItem('userName', this.userName);
    this.route.navigate(['/', 'game']);
  }

}

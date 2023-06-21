import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userName = '';

  constructor(
    private route: Router,
    private userSevice: UserService,
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.userSevice.setUserName(this.userName);
    this.route.navigate(['/', 'game']);
  }

}

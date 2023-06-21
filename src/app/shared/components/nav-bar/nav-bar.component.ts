import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('levels') levels!: ElementRef;

  level: string | null = ''; //TODO Create enum
  playing!: boolean;

  constructor(
    private userService: UserService,
    private gameService: GameService,
  ) {
    this.gameService.playing$.subscribe((value) => {
      this.playing = value;
    });
  }

  ngOnInit(): void {
    this.level = this.userService.getLevel();

    if (this.level === null || this.level === '') { //TODO Check improvement
      this.userService.setLevel('Bajo');
      this.level = "Bajo";
    }
  }

  changeLevel(value: string) {
    this.userService.setLevel(value);
    this.level = value;
  }

  logout() {
    this.userService.removeUserName();
    this.userService.removeLevel();
  }

}

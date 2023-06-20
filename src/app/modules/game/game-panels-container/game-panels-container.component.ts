import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-game-panels-container',
  templateUrl: './game-panels-container.component.html',
  styleUrls: ['./game-panels-container.component.scss']
})
export class GamePanelsContainerComponent implements OnInit {

  userName: string | null = '';

  playing!: boolean;
  initialState!: boolean;
  finished!: boolean;
  continue!: boolean;
  scoring!: number;
  panels: number[] = [];
  timer!: number;
  winnerNumber!: number;

  hideTime: boolean = false;

  constructor(
    private gameService: GameService,
    private userService: UserService,
  ) {
      this.gameService.initialState$.subscribe((value) => {
        this.initialState = value;
      });
      this.gameService.playing$.subscribe((value) => {
        this.playing = value;
      });
      this.gameService.continue$.subscribe((value) => {
        this.continue = value;
      });
      this.gameService.finished$.subscribe((value) => {
        this.finished = value;
      });
      this.gameService.scoring$.subscribe((value) => {
        this.scoring = value;
      });
      this.gameService.panels$.subscribe((value) => {
        this.panels = value;
      });
      this.gameService.timer$.subscribe((value) => {
        this.timer = value;
      });
      this.gameService.winnerNumber$.subscribe((value) => {
        this.winnerNumber = value;
      });
   }

  ngOnInit(): void {
    this.userName = this.userService.getUserName();
  }

  checkTryOption(event: any) {
    this.gameService.checkTryIfCorrect(event);
  }

  startGame() {
    this.hideTime = false;
    this.gameService.startGame();
  }

  continueGame() {
    this.hideTime = false;
    this.gameService.continueGame();
  }

  hidePanels() {
    this.hideTime = true;
  }
}

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  @Input() countDownTo = 0;
  @Output() finishedTime: EventEmitter<boolean> = new EventEmitter();

  currentTime = 0;
  interval: any;
  timer = 0;

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.gameService.timer$.subscribe((value) => {
      this.timer = value;
      if(this.timer > 0) this.setCountdown(this.timer);
    });
  }

  setCountdown(seconds: number) {
    this.currentTime = seconds;
    this.interval = setInterval(() => {
      if (this.currentTime > 0) {
        this.currentTime--;
      } else {
        clearInterval(this.interval);
        this.finishedTime.emit(true);
      }
    }, 1000);
  }

}


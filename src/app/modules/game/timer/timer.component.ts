import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnChanges {

  @Input() countDownTo = 0;
  @Output() finishedTime: EventEmitter<boolean> = new EventEmitter();

  currentTime = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges() {
    console.log('on changes')
    this.setCountdown(this.countDownTo);
  }

  setCountdown(seconds: number) {
    console.log('setCountdown')

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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss']
})
export class GamePanelComponent implements OnInit {

  @Input() panel: number = 0;
  @Input() hideTime: boolean = false;
  @Input() winnerNumber: number = 0;
  @Output() tryOption: EventEmitter<number> = new EventEmitter();

  success: boolean = false;
  error: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  sendNumber(panel: number) {
    this.hideTime = false;
    if (this.winnerNumber === panel) {
      this.success = true;
    } else {
      this.error = true;
    }

    this.tryOption.emit(panel)
    setTimeout(() => {
      this.error = false;
      this.success = false;
    }, 2000);
  }
}

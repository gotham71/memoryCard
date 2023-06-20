import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss']
})
export class GamePanelComponent implements OnInit {

  @Input() panel: number = 0;
  @Input() hideTime: boolean = false;
  @Input() success: string = '';
  @Output() tryOption: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendNumber(panel: number) {
    this.tryOption.emit(panel)
  }


}

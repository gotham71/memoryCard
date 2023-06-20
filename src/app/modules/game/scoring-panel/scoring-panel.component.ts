import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-scoring-panel',
  templateUrl: './scoring-panel.component.html',
  styleUrls: ['./scoring-panel.component.scss']
})
export class ScoringPanelComponent implements OnInit {

  scoring!: number;

  constructor(
    private gameService: GameService,
  ) {
    this.gameService.scoring$.subscribe(value => {
      this.scoring = value;
    })
  }

  ngOnInit(): void {
  }

}

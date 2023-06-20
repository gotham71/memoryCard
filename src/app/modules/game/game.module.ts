import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GamePanelComponent } from './game-panel/game-panel.component';
import { GamePanelsContainerComponent } from './game-panels-container/game-panels-container.component';
import { ScoringPanelComponent } from './scoring-panel/scoring-panel.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    GamePanelComponent,
    GamePanelsContainerComponent,
    ScoringPanelComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePanelsContainerComponent } from './game-panels-container/game-panels-container.component';

const routes: Routes = [
  { path: '', component: GamePanelsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }

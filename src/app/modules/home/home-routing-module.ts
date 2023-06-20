import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'game', loadChildren: () => import(`@modules/game/game.module`).then( m => m.GameModule)
  },
  {
    path: '**', redirectTo: '/game'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

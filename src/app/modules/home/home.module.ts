import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing-module';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    HomePageComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }

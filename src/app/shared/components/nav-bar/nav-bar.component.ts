import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('levels') levels!: ElementRef;

  level: string | null = ''; //TODO Create enum

  constructor() { }

  ngOnInit(): void {
    this.level = localStorage.getItem('level');

    if (this.level === null || this.level === '') { //TODO Check improvement
      localStorage.setItem('level', 'Bajo');
      this.level = "Bajo";
    }
  }

  checkLevel(value: string) {
    localStorage.setItem('level', value);
    this.level = value;
  }

}

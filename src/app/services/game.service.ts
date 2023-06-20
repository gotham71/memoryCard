import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LEVEL_TIME_AND_POINTS_PRESETS, LevelTimeAndPointsPreset } from './presets';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // Set states
  private playing = new BehaviorSubject<boolean>(false);
  playing$ = this.playing.asObservable();

  private initialState = new BehaviorSubject<boolean>(true);
  initialState$ = this.initialState.asObservable();

  private continue = new BehaviorSubject<boolean>(false);
  continue$ = this.continue.asObservable();

  private finished = new BehaviorSubject<boolean>(false);
  finished$ = this.finished.asObservable();

  private panels = new BehaviorSubject<number[]>([]);
  panels$ = this.panels.asObservable();

  private scoring = new BehaviorSubject<number>(0);
  scoring$ = this.scoring.asObservable();

  private timer = new BehaviorSubject<number>(0);
  timer$ = this.timer.asObservable();

  private points = new BehaviorSubject<number>(0);
  points$ = this.points.asObservable();

  private winnerNumber = new BehaviorSubject<number>(0);
  winnerNumber$ = this.winnerNumber.asObservable();

  presets: LevelTimeAndPointsPreset[] = LEVEL_TIME_AND_POINTS_PRESETS;

  currentScoring: number = 0;
  currentWinnerNumber: number = 0;

  level = localStorage.getItem('level');
  currentPreset: any;

  constructor() {
    this.currentPreset = this.presets.find((preset) => preset.name === localStorage.getItem('level')); //TODO check

    this.scoring.subscribe(value => {
      this.currentScoring = value;
    });
  }


  generateNumbersCombination(): number[] {
    const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const randomIndex = Math.floor(Math.random() * numbersArray.length);
    this.currentWinnerNumber = numbersArray[randomIndex];
    console.log('currentWinnerNumber: ', this.currentWinnerNumber);
    this.winnerNumber.next(this.currentWinnerNumber);
    for (let i = numbersArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbersArray[i], numbersArray[j]] = [numbersArray[j], numbersArray[i]];
    }

    return numbersArray;
  }

  checkTryIfCorrect(tryOption: number):boolean {
    if (tryOption === this.currentWinnerNumber) {
      const currentScoring = this.currentScoring + this.currentPreset.points;
      this.scoring.next(currentScoring);
      this.continue.next(true);
      //this.continueGame();
      return true;
    } else {
      setTimeout(() => {
        this.finishGame();
      }, 2000);
      return false;
    }
  }

  startGame() {
    const currentPanels = this.generateNumbersCombination();
    this.panels.next(currentPanels);
    this.scoring.next(0);
    this.initialState.next(false);
    this.continue.next(false);
    this.playing.next(true);
    this.finished.next(false);
    this.winnerNumber.next(this.currentWinnerNumber);
    this.timer.next(this.currentPreset.time);
  }

  continueGame() {
    const currentPanels = this.generateNumbersCombination();
    this.panels.next(currentPanels);
    this.initialState.next(false);
    this.continue.next(false);
    this.playing.next(true);
    this.finished.next(false);
    this.timer.next(this.currentPreset.time);
  }

  finishGame() {
    this.initialState.next(false);
    this.playing.next(false);
    this.finished.next(true);
    this.timer.next(0);
  }

}

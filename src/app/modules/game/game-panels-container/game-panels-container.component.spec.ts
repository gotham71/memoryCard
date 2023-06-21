import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GamePanelsContainerComponent } from './game-panels-container.component';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';
import { BehaviorSubject } from 'rxjs';
import { TimerComponent } from '../timer/timer.component';
import { ScoringPanelComponent } from '../scoring-panel/scoring-panel.component';
import { GamePanelComponent } from '../game-panel/game-panel.component';

describe('GamePanelsContainerComponent', () => {
  let component: GamePanelsContainerComponent;
  let fixture: ComponentFixture<GamePanelsContainerComponent>;
  let gameService: Partial<GameService>;
  let userService: Partial<UserService>;

  beforeEach(waitForAsync (() => {
    gameService = {
      initialState$: new BehaviorSubject<boolean>(true),
      playing$: new BehaviorSubject<boolean>(false),
      continue$: new BehaviorSubject<boolean>(false),
      finished$: new BehaviorSubject<boolean>(false),
      scoring$: new BehaviorSubject<number>(0),
      panels$: new BehaviorSubject<number[]>([]),
      timer$: new BehaviorSubject<number>(0),
      winnerNumber$: new BehaviorSubject<number>(0),
      startGame: jasmine.createSpy(),
      continueGame: jasmine.createSpy(),
      checkTryIfCorrect: jasmine.createSpy()
    };

    userService = {
      getUserName: jasmine.createSpy().and.returnValue('John Doe')
    };

    TestBed.configureTestingModule({
      declarations: [GamePanelsContainerComponent, TimerComponent, ScoringPanelComponent, GamePanelComponent],
      providers: [
        { provide: GameService, useValue: gameService },
        { provide: UserService, useValue: userService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePanelsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties correctly', () => {
    expect(component.userName).toBe('John Doe');
    expect(component.playing).toBeFalse();
    expect(component.initialState).toBeTrue();
    expect(component.finished).toBeFalse();
    expect(component.continue).toBeFalse();
    expect(component.scoring).toBe(0);
    expect(component.panels).toEqual([]);
    expect(component.timer).toBe(0);
    expect(component.winnerNumber).toBe(0);
    expect(component.hideTime).toBeFalse();
  });

  it('should call gameService.checkTryIfCorrect when checkTryOption is called', () => {
    component.checkTryOption(5);

    expect(gameService.checkTryIfCorrect).toHaveBeenCalledWith(5);
  });

  it('should call gameService.startGame when startGame is called', () => {
    component.startGame();

    expect(gameService.startGame).toHaveBeenCalled();
  });

  it('should call gameService.continueGame when continueGame is called', () => {
    component.continueGame();

    expect(gameService.continueGame).toHaveBeenCalled();
  });

  it('should set hideTime to true when hidePanels is called', () => {
    component.hidePanels();

    expect(component.hideTime).toBeTrue();
  });
});

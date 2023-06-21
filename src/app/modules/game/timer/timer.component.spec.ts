import { ComponentFixture, TestBed, tick, fakeAsync, waitForAsync, flush, discardPeriodicTasks } from '@angular/core/testing';
import { TimerComponent } from './timer.component';
import { GameService } from 'src/app/services/game.service';
import { BehaviorSubject } from 'rxjs';

class MockGameService extends GameService {
  override timer$ = new BehaviorSubject<number>(0);
}

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;
  let gameService: MockGameService;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent],
      providers: [MockGameService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(MockGameService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit finishedTime event when the countdown reaches 0', fakeAsync(() => {
    const timerSubject = gameService.timer$;
    const finishedTimeSpy = spyOn(component.finishedTime, 'emit');

    fixture.detectChanges();

    expect(component.currentTime).toBe(0);

    component.setCountdown(3);

    tick(3001);
    flush();
    discardPeriodicTasks();

    expect(component.currentTime).toBe(0);
    expect(finishedTimeSpy).toHaveBeenCalledWith(true);
  }));
});

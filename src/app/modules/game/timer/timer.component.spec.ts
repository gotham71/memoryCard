import { ComponentFixture, TestBed, tick, fakeAsync, waitForAsync } from '@angular/core/testing';
import { TimerComponent } from './timer.component';
import { GameService } from 'src/app/services/game.service';
import { BehaviorSubject } from 'rxjs';

class MockGameService extends GameService {
  override timer$ = new BehaviorSubject<number>(0);
}

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;
  let gameService: MockGameService; // Use the MockGameService type

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent],
      providers: [MockGameService] // Provide the MockGameService
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(MockGameService); // Inject the MockGameService
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the countdown when the timer value changes', fakeAsync(() => {
    const timerSubject = gameService.timer$; // Access the timer$ property from the MockGameService

    fixture.detectChanges(); // Manually trigger ngOnInit

    expect(component.timer).toBe(0);
    expect(component.currentTime).toBe(0);

    timerSubject.next(10);
    fixture.detectChanges();

    expect(component.timer).toBe(10);
    expect(component.currentTime).toBe(10);

    tick(1000); // Advance 1 second

    expect(component.currentTime).toBe(9);

    timerSubject.next(5);
    fixture.detectChanges();
    tick(1000);

    expect(component.currentTime).toBe(4);

    timerSubject.next(0);
    fixture.detectChanges();
    tick(1000);

    expect(component.currentTime).toBe(0);
  }));

  it('should emit finishedTime event when the countdown reaches 0', fakeAsync(() => {
    const timerSubject = gameService.timer$; // Access the timer$ property from the MockGameService
    const finishedTimeSpy = spyOn(component.finishedTime, 'emit');

    fixture.detectChanges(); // Manually trigger ngOnInit

    expect(component.currentTime).toBe(0);

    timerSubject.next(3);
    fixture.detectChanges();

    expect(component.currentTime).toBe(3);

    tick(3000); // Advance 3 seconds

    expect(component.currentTime).toBe(0);
    expect(finishedTimeSpy).toHaveBeenCalledWith(true);
  }));
});

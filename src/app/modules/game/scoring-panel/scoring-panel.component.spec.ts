import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScoringPanelComponent } from './scoring-panel.component';
import { BehaviorSubject } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

describe('ScoringPanelComponent', () => {
  let component: ScoringPanelComponent;
  let fixture: ComponentFixture<ScoringPanelComponent>;
  let gameService: GameService;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringPanelComponent ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoringPanelComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(GameService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//TODO check testss
  // it('should update the scoring value when the gameService scoring changes', () => {
  //   const scoringSubject = new BehaviorSubject<number>(0);
  //   spyOn(gameService, 'scoring$').and.returnValue(scoringSubject);

  //   fixture.detectChanges(); // Manually trigger ngOnInit

  //   expect(component.scoring).toBe(0);

  //   scoringSubject.next(100);
  //   fixture.detectChanges();

  //   expect(component.scoring).toBe(100);

  //   scoringSubject.next(200);
  //   fixture.detectChanges();

  //   expect(component.scoring).toBe(200);
  // });
});

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
});

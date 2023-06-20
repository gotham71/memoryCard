import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringPanelComponent } from './scoring-panel.component';

describe('ScoringPanelComponent', () => {
  let component: ScoringPanelComponent;
  let fixture: ComponentFixture<ScoringPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoringPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoringPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

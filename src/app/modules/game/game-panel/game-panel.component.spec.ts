import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GamePanelComponent } from './game-panel.component';

describe('GamePanelComponent', () => {
  let component: GamePanelComponent;
  let fixture: ComponentFixture<GamePanelComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ GamePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit tryOption event with the panel number', () => {
    const panelNumber = 5;
    const tryOptionSpy = spyOn(component.tryOption, 'emit');

    component.sendNumber(panelNumber);

    expect(component.hideTime).toBe(false);
    expect(component.success).toBe(panelNumber === component.winnerNumber);
    expect(component.error).toBe(panelNumber !== component.winnerNumber);
    expect(tryOptionSpy).toHaveBeenCalledWith(panelNumber);

    setTimeout(() => {
      expect(component.error).toBe(false);
      expect(component.success).toBe(false);
    }, 2000);
  });
});

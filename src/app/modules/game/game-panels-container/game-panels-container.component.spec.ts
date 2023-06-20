import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePanelsContainerComponent } from './game-panels-container.component';

describe('GamePanelsContainerComponent', () => {
  let component: GamePanelsContainerComponent;
  let fixture: ComponentFixture<GamePanelsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePanelsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePanelsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

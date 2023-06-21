import { TestBed, inject } from '@angular/core/testing';
import { GameService } from './game.service';
import { UserService } from './user.service';

describe('GameService', () => {
  let gameService: GameService;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService, UserService]
    });
    gameService = TestBed.inject(GameService);
    userService = TestBed.inject(UserService);
  });

  afterEach(() => {
    localStorage.clear(); // Clear local storage after each test
  });

  it('should generate numbers combination', () => {
    const numbersArray = gameService.generateNumbersCombination();
    expect(numbersArray.length).toBe(9);
  });

  it('should set current preset based on user level Bajo',
    inject([GameService, UserService], (gameService: GameService, userService: UserService) => {
      const level = 'Bajo';
      spyOn(userService, 'getLevel').and.returnValue(level);
      const currentPresetResult = gameService.getCurrentPreset();
      expect(gameService['level']).toBe(level);
      expect(currentPresetResult).toBeDefined();
    }
  ));

  it('should set current preset based on user level Medio',
    inject([GameService, UserService], (gameService: GameService, userService: UserService) => {
      const level = 'Medio';
      spyOn(userService, 'getLevel').and.returnValue(level);
      const currentPresetResult = gameService.getCurrentPreset();
      expect(gameService['level']).toBe(level);
      expect(currentPresetResult).toBeDefined();
    }
  ));

  it('should set current preset based on user level Alto',
    inject([GameService, UserService], (gameService: GameService, userService: UserService) => {
      const level = 'Alto';
      spyOn(userService, 'getLevel').and.returnValue(level);
      const currentPresetResult = gameService.getCurrentPreset();
      expect(gameService['level']).toBe(level);
      expect(currentPresetResult).toBeDefined();
    }
  ));

});

// import { TestBed } from '@angular/core/testing';

// import { GameService } from './game.service';

// describe('GameService', () => {
//   let service: GameService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(GameService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { TestBed, inject } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
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

  // it('should check if try option is correct',
  //   inject([GameService], (gameService: GameService) => {

  //     const tryOption = 5;
  //     gameService['currentWinnerNumber'] = tryOption;
  //     const currentScoring = gameService['currentScoring'];
  //     const currentPresetPoints = gameService['currentPreset'].points;
  //     const scoringSubject = new BehaviorSubject<number>(currentScoring);
  //     const continueSubject = new BehaviorSubject<boolean>(false);
  //     const playingSubject = new BehaviorSubject<boolean>(false);

  //     gameService['scoring'] = scoringSubject;
  //     gameService['continue'] = continueSubject;


  //     expect(scoringSubject.value).toBe(currentScoring + currentPresetPoints);
  //     expect(continueSubject.value).toBe(true);
  //     expect(playingSubject.value).toBe(false)
  // }));

  // it('should start the game', () => {
  //   const panelsSubject = new BehaviorSubject<number[]>([]);
  //   const scoringSubject = new BehaviorSubject<number>(0);
  //   const initialStateSubject = new BehaviorSubject<boolean>(true);
  //   const continueSubject = new BehaviorSubject<boolean>(false);
  //   const playingSubject = new BehaviorSubject<boolean>(false);
  //   const finishedSubject = new BehaviorSubject<boolean>(false);
  //   const winnerNumberSubject = new BehaviorSubject<number>(0);

  //   gameService['panels'] = panelsSubject;
  //   gameService['scoring'] = scoringSubject;
  //   gameService['initialState'] = initialStateSubject;
  //   gameService['continue'] = continueSubject;
  //   gameService['playing'] = playingSubject;
  //   gameService['finished'] = finishedSubject;
  //   gameService['winnerNumber'] = winnerNumberSubject;

  //   const generateNumbersCombinationSpy = spyOn(gameService, 'generateNumbersCombination').and.callThrough();
  //   const getCurrentPresetSpy = spyOn(gameService, 'getCurrentPreset').and.callThrough();

  //   gameService.startGame();

  //   expect(generateNumbersCombinationSpy).toHaveBeenCalled();
  //   expect(getCurrentPresetSpy).toHaveBeenCalled();
  //   expect(panelsSubject.value.length).toBe(9);
  //   expect(scoringSubject.value).toBe(0);
  //   expect(initialStateSubject.value).toBe(false);
  //   expect(continueSubject.value).toBe(false);
  //   expect(playingSubject.value).toBe(true);
  //   expect(finishedSubject.value).toBe(false);
  //   expect(winnerNumberSubject.value).toBe(gameService['currentWinnerNumber']);

  // });

  // it('should continue the game', () => {
  //   const panelsSubject = new BehaviorSubject<number[]>([]);
  //   const initialStateSubject = new BehaviorSubject<boolean>(true);
  //   const continueSubject = new BehaviorSubject<boolean>(false);
  //   const playingSubject = new BehaviorSubject<boolean>(false);
  //   const finishedSubject = new BehaviorSubject<boolean>(false);
  //   const timerSubject = new BehaviorSubject<number>(0);
  //   gameService['panels'] = panelsSubject;
  //   gameService['initialState'] = initialStateSubject;
  //   gameService['continue'] = continueSubject;
  //   gameService['playing'] = playingSubject;
  //   gameService['finished'] = finishedSubject;
  //   gameService['timer'] = timerSubject;
  //   const generateNumbersCombinationSpy = spyOn(gameService, 'generateNumbersCombination').and.callThrough();
  //   const getCurrentPresetSpy = spyOn(gameService, 'getCurrentPreset').and.callThrough();

  //   gameService.continueGame();

  //   expect(generateNumbersCombinationSpy).toHaveBeenCalled();
  //   expect(getCurrentPresetSpy).toHaveBeenCalled();
  //   expect(panelsSubject.value.length).toBe(9);
  //   expect(initialStateSubject.value).toBe(false);
  //   expect(continueSubject.value).toBe(false);
  //   expect(playingSubject.value).toBe(true);
  //   expect(finishedSubject.value).toBe(false);
  //   expect(timerSubject.value).toBe(gameService['currentPreset'].time);
  // });

  // it('should finish the game', () => {
  //   const initialStateSubject = new BehaviorSubject<boolean>(false);
  //   const playingSubject = new BehaviorSubject<boolean>(true);
  //   const finishedSubject = new BehaviorSubject<boolean>(false);
  //   const timerSubject = new BehaviorSubject<number>(0);
  //   gameService['initialState'] = initialStateSubject;
  //   gameService['playing'] = playingSubject;
  //   gameService['finished'] = finishedSubject;
  //   gameService['timer'] = timerSubject;

  //   gameService.finishGame();

  //   expect(initialStateSubject.value).toBe(false);
  //   expect(playingSubject.value).toBe(false);
  //   expect(finishedSubject.value).toBe(true);
  //   expect(timerSubject.value).toBe(0);
  // });
});

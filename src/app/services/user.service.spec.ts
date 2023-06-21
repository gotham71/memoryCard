import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
    userService = TestBed.inject(UserService);
  });

  afterEach(() => {
    localStorage.clear(); // Clear local storage after each test
  });

  it('should get the user name from local storage', () => {
    const userName = 'Jose Maria';
    localStorage.setItem('userName', userName);
    expect(userService.getUserName()).toBe(userName);
  });

  it('should set the user name in local storage', () => {
    const userName = 'Jose Maria';
    userService.setUserName(userName);
    expect(localStorage.getItem('userName')).toBe(userName);
  });

  it('should remove the user name from local storage', () => {
    const userName = 'Jose Maria';
    localStorage.setItem('userName', userName);
    userService.removeUserName();
    expect(localStorage.getItem('userName')).toBeNull();
  });

  it('should get the level from local storage', () => {
    const level = '5';
    localStorage.setItem('level', level);
    expect(userService.getLevel()).toBe(level);
  });

  it('should set the level in local storage', () => {
    const level = '5';
    userService.setLevel(level);
    expect(localStorage.getItem('level')).toBe(level);
  });

  it('should remove the level from local storage', () => {
    const level = '5';
    localStorage.setItem('level', level);
    userService.removeLevel();
    expect(localStorage.getItem('level')).toBeNull();
  });
});

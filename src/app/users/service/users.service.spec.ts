import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, fakeAsync, flushMicrotasks, inject } from '@angular/core/testing';

import { USERS } from 'src/app/shared/data/users.list.mock';
import { UserHelperService } from './user-helper.service';
import { UsersService } from './users.service';
import { asyncData } from 'src/testing/async-observable-helpers';

class UserHelperMock {
  returnsPromise = () => {
    return Promise.resolve(true);
  }
}

describe('UsersService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userService: UsersService;
  let mockUser: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [HttpClientTestingModule],
      // Provide the service-under-test
      providers: [UsersService,
        {
          provide: UserHelperService, useClass: UserHelperMock
        }]
    });
    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    userService = TestBed.inject(UsersService);
    mockUser = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: { lat: '-37.3159', lng: '81.1496' },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
      image: 'https://placeimg.com/640/480/business',
    };
  });
  it('should be created', () => {
    expect(userService).toBeTruthy();
  });
  it('shoudld return fake async test', (done) => {
    setTimeout(() => {
      expect(true).toBe(true);
      done();
    });
  });

  it('should get a promise value from userHelper Service', fakeAsync(inject(
    [UserHelperService], (userHelper: UserHelperMock) => {
      spyOn(userHelper, 'returnsPromise').and.callThrough();
      // tslint:disable-next-line: one-variable-per-declaration
      let results, error;
      userHelper.returnsPromise().then(res => results = res).catch(err => error = err);
      flushMicrotasks();
      expect(results).toBeTruthy();
      expect(error).toBeUndefined();
      // expect(userHelper.returnsPromise).toHaveBeenCalledWith();
    }
  )));

  it('should return successfull request', () => {
    expect(userService.getUsers()).toBeTruthy();
  });
  it('should return a userList', () => {
    userService.getUsers().subscribe((user) => {
      expect(user[0]).toEqual(mockUser);
    });
    const request = httpTestingController.expectOne('app/users');
    request.flush([mockUser]);
    httpTestingController.verify();
  });
});

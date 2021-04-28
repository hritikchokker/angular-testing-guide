import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed
} from '@angular/core/testing';

import { USERS } from 'src/app/shared/data/users.list.mock';
import { UserListComponent } from './user-list.component';
import { UsersService } from '../service/users.service';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  const dummyUser = USERS;
  let userServiceStub: Partial<UsersService>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [
        // { provide: UsersService, useValue: userServiceStub },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('should fetch all users', () => {
  //   component.userList$.subscribe(data => expect(dummyUser));
  // });
});

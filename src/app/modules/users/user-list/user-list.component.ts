import * as faker from 'faker';

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { USERS } from 'src/app/shared/data/users.list.mock';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  userList = USERS;
  constructor(private _userService: UsersService) { }
  usersList$!: Observable<any[]>;
  ngOnInit(): void {
  }


}

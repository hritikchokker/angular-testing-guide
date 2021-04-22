import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { USERS } from 'src/app/shared/data/users.list.mock';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  isLoading = true;
  userDetails: any;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(data => {
      const { id } = data;
      if (id) {
        this.userDetails = USERS.find(el => el.id == id);
        console.log(this.userDetails, 'usersid');
        this.isLoading = false;
      }
    });
  }

}

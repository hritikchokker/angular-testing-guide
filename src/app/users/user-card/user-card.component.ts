import * as faker from 'faker';

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {

  user: any;
  imageArr: any[] = [];
  @Input() set userDetails(details: any) {
    this.user = details;
  }
  @Input() isDetails = false;
  constructor() { }

  ngOnInit(): void {
  }

}

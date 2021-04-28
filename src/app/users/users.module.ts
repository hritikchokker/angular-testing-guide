import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'edit/:id',
    component: EditUserComponent
  },
  {
    path: ':id',
    component: UserDetailComponent
  }
];


@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailComponent,
    EditUserComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UsersModule { }

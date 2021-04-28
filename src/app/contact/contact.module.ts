import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: 'edit/:id',
    component: ContactEditComponent
  },
  {
    path: ':id',
    component: ContactDetailComponent
  }
];

@NgModule({
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }

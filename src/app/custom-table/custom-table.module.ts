import {
  RouterModule,
  Routes
} from '@angular/router';

import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

const routes: Routes = [
  {
    path: '',
    component: CustomTableComponent
  }
];

@NgModule({
  declarations: [
    CustomTableComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class CustomTableModule { }

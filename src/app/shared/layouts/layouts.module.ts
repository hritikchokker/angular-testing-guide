import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutsComponent } from './layouts.component';
import { MainComponent } from './main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

const COMMON_MODULES = [
  HeaderComponent,
  FooterComponent,
  SidenavComponent,
  MainComponent,
  LayoutsComponent
];

@NgModule({
  declarations: COMMON_MODULES,
  imports: [
    CommonModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ], exports: COMMON_MODULES
})
export class LayoutsModule { }

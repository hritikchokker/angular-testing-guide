import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NullcheckPipe } from './nullcheck.pipe';



@NgModule({
  declarations: [NullcheckPipe],
  imports: [
    CommonModule
  ], exports: [NullcheckPipe]
})
export class NullcheckModule { }

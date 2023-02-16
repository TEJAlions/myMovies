import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdultContentDirective } from './adult-content.directive';



@NgModule({
  declarations: [
    AdultContentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdultContentDirective
  ]
})
export class DirectivesModule { }

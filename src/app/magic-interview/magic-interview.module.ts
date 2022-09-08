import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagicInterviewRoutingModule } from './magic-interview-routing.module';
import { MagicInterviewComponent } from './magic-interview.component';


@NgModule({
  declarations: [
    MagicInterviewComponent
  ],
  imports: [
    CommonModule,
    MagicInterviewRoutingModule
  ]
})
export class MagicInterviewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { H2Component } from './h2/h2.component';
import { H1Component } from "./h1/h1.component";
import { H3Component } from './h3/h3.component';
import { H4Component } from './h4/h4.component';
import { H5Component } from './h5/h5.component';


@NgModule({
  declarations: [
    H1Component,
    ParagraphComponent,
    H2Component,
    H3Component,
    H4Component,
    H5Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParagraphComponent,
    H1Component,
    H2Component,
    H3Component,
    H4Component,
    H5Component,
  ]
})
export class SharedModule { }

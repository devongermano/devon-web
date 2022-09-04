import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ParagraphComponent } from './paragraph/paragraph.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ParagraphComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ParagraphComponent,
  ]
})
export class SharedModule { }

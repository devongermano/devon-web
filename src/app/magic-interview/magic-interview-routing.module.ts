import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagicInterviewComponent } from './magic-interview.component';

const routes: Routes = [{ path: '', component: MagicInterviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagicInterviewRoutingModule { }

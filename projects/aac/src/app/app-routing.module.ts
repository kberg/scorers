import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScorepadComponent } from './scorepad/scorepad.component';

const routes: Routes = [
  { path: 'aac/scorepad', component: ScorepadComponent },
  { path: 'aac', redirectTo: 'aac/scorepad' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

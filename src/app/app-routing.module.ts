import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AacSharedModule } from 'projects/aac/src/app/app.module';

const routes: Routes = [
  { path: 'aac', loadChildren: '../../projects/aac/src/app/app.module#AacSharedModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AacSharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

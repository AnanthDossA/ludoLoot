import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayGroundComponent } from './play-ground.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlayGroundComponent,
  }
];

@NgModule({
  declarations: [PlayGroundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayGroundModule { }

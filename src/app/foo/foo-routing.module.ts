import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FooComponent} from './foo.component';

const routes: Routes = [
  {
    path: ':title',
    component: FooComponent,
  },
  {
    path: '**',
    component: FooComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooRoutingModule {}


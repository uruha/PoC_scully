import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {FooRoutingModule} from './foo-routing.module';
import {FooComponent} from './foo.component';

@NgModule({
  declarations: [FooComponent],
  imports: [CommonModule, FooRoutingModule, ScullyLibModule],
})
export class FooModule {}

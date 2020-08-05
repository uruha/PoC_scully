import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {HogeRoutingModule} from './hoge-routing.module';
import {HogeComponent} from './hoge.component';

@NgModule({
  declarations: [HogeComponent],
  imports: [CommonModule, HogeRoutingModule, ScullyLibModule],
})
export class HogeModule {}

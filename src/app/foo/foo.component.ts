import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

declare var ng: any;

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class FooComponent implements OnInit {
  ngOnInit() {}

  constructor(public routerService: ScullyRoutesService) {}
}

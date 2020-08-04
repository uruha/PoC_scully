import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-hoge',
  templateUrl: './hoge.component.html',
  styleUrls: ['./hoge.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class HogeComponent implements OnInit {
  ngOnInit() {}

  constructor(public routerService: ScullyRoutesService) {}
}

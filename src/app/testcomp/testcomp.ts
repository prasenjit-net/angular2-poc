/**
 * Created by PRASEN on 10/22/2016.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'testcomp',
  styleUrls: ['./testcomp.css'],
  templateUrl: './testcomp.html'
})
export class TestComp {
  name: string = '';
  setValue() { this.name = 'Nancy'; }
}

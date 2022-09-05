import {Component, Input, OnInit} from '@angular/core';
import {Required} from "../../tools/decorators";

@Component({
  selector: 'app-h2',
  templateUrl: './h2.component.html',
  styleUrls: ['./h2.component.scss']
})
export class H2Component implements OnInit {

  @Input() @Required text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

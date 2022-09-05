import {Component, Input, OnInit} from '@angular/core';
import {Required} from "../../tools/decorators";

@Component({
  selector: 'app-h3',
  templateUrl: './h3.component.html',
  styleUrls: ['./h3.component.scss']
})
export class H3Component implements OnInit {

  @Input() @Required text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

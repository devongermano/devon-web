import {Component, Input, OnInit} from '@angular/core';
import {Required} from "../../tools/decorators";

@Component({
  selector: 'app-h4',
  templateUrl: './h4.component.html',
  styleUrls: ['./h4.component.scss']
})
export class H4Component implements OnInit {

  @Input() @Required text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

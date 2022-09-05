import {Component, Input, OnInit} from '@angular/core';
import {Required} from "../../tools/decorators";

@Component({
  selector: 'app-h5',
  templateUrl: './h5.component.html',
  styleUrls: ['./h5.component.scss']
})
export class H5Component implements OnInit {

  @Input() @Required text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

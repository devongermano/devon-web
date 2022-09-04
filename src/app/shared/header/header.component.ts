import {Component, Input, OnInit} from '@angular/core';
import { Required } from "../../tools/decorators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() @Required text!: string;

  constructor() { }

  ngOnInit(): void {}

}

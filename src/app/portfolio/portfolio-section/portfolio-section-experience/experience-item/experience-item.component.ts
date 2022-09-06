import {Component, Input, OnInit} from '@angular/core';
import {Required} from "../../../../tools/decorators";

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {

  @Input() @Required company!: string;
  // @Input() @Required position!: string;
  @Input() @Required startYear!: string;
  @Input() endYear?: string;
  @Input() @Required bullets!: string[];

  constructor() { }

  ngOnInit(): void {}

}

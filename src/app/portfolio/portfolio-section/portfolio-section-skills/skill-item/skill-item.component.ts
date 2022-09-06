import { Component, Input, OnInit } from '@angular/core';
import { Required } from "../../../../tools/decorators";

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() @Required skillLogoPath!: string;
  @Input() @Required skillName!: string;
  @Input() @Required skillColor!: string;
  @Input() @Required skillYears!: string;
  @Input() @Required yearsOfExperience!: string;

  constructor() {
  }

  ngOnInit(): void {}

  getYearsPercent(): string {
    return `${(parseInt(this.skillYears) / parseInt(this.yearsOfExperience)) * 100}%`;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { NgsRevealModule } from "ngx-scrollreveal";
import { SharedModule } from "../shared/shared.module";
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { PortfolioSectionHeaderComponent } from './portfolio-section-header/portfolio-section-header.component';
import { PortfolioSectionExperienceComponent } from './portfolio-section/portfolio-section-experience/portfolio-section-experience.component';
import { PortfolioSectionBodyComponent } from './portfolio-section/portfolio-section-body/portfolio-section-body.component';
import { PortfolioSectionSkillsComponent } from './portfolio-section/portfolio-section-skills/portfolio-section-skills.component';
import { PortfolioSectionFaqComponent } from './portfolio-section/portfolio-section-faq/portfolio-section-faq.component';
import { SkillItemComponent } from "./portfolio-section/portfolio-section-skills/skill-item/skill-item.component";
import {
  ExperienceItemComponent
} from "./portfolio-section/portfolio-section-experience/experience-item/experience-item.component";


@NgModule({
  declarations: [
    PortfolioComponent,
    SkillItemComponent,
    ExperienceItemComponent,
    PortfolioSectionComponent,
    PortfolioSectionHeaderComponent,
    PortfolioSectionExperienceComponent,
    PortfolioSectionBodyComponent,
    PortfolioSectionSkillsComponent,
    PortfolioSectionFaqComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    NgsRevealModule,
    SharedModule,
  ],
  exports: [
    SkillItemComponent,
  ]
})
export class PortfolioModule { }

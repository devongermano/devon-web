import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SkillItemComponent } from "./skill-item/skill-item.component";
import { NgsRevealModule } from "ngx-scrollreveal";
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { SharedModule } from "../shared/shared.module";
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { PortfolioSectionHeaderComponent } from './portfolio-section-header/portfolio-section-header.component';
import { PortfolioSectionExperienceComponent } from './portfolio-section/portfolio-section-experience/portfolio-section-experience.component';
import { PortfolioSectionBodyComponent } from './portfolio-section/portfolio-section-body/portfolio-section-body.component';
import { PortfolioSectionSkillsComponent } from './portfolio-section/portfolio-section-skills/portfolio-section-skills.component';
import { PortfolioSectionFaqComponent } from './portfolio-section/portfolio-section-faq/portfolio-section-faq.component';


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

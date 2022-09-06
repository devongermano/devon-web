import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-section-experience',
  templateUrl: './portfolio-section-experience.component.html',
  styleUrls: ['./portfolio-section-experience.component.scss']
})
export class PortfolioSectionExperienceComponent implements OnInit {

  experienceItems = [
    {
      company: "Verb",
      startYear: "2021",
      endYear: "Present",
      logo: 'assets/logos/verb-l.svg',
      color: 'black',
      bullets: [
        "Led the development of VERB Live, a live streaming, interactive, serverless application that utilized Node.js, Angular, Redis, Kafka, PostgreSQL, and Docker with a variety of 3rd-party integrations in an AWS production environment",
        "Managed the development of VERB SWIM, a direct-sales enablement platform that utilized Node.js, Nest.js, React, Next.js, and PostgreSQL in an AWS production environment",
        "Defined project scope and gathered requirements for an architectural migration that saved $15,000 in monthly cloud server costs",
        "Oversaw a team of 6 and coordinated workflow to delegate technical tasks",
      ]
    },
    {
      company: "Smile Direct Club",
      startYear: "2019",
      endYear: "2021",
      logo: 'assets/logos/sdc-l.svg',
      color: '#5700ff',
      bullets: [
        "Worked on projects that utilized several different technologies including Python, Vue.js, Node.js, Django, Redis, PostgreSQL, AWS, and Docker in a remote environment",
        "Collaborated with other developers to identify and implement architectural improvements to existing applications",
        "Implemented and tested code for user-facing applications using Django and Vue.js",
        "Developed, tested, and deployed applications in an AWS production environment",
      ]
    },
    {
      company: "CPH Technologies",
      startYear: "2015",
      endYear: "2019",
      logo: 'assets/logos/cph-dark.svg',
      color: '#ffbb2d',
      bullets: [
        "Developed and maintained code in Go, Kotlin, Python, C#, Typescript, and JavaScript in a remote environment",
        "Designed, implemented, and maintained a continuous integration and continuous delivery pipeline using Kubernetes, Docker, and CircleCI",
        "Tested, sliced, designed, and implemented mockups for user-facing, front-end applications using Angular 2+",
        "Implemented serverless applications using AWS and Google Cloud Platform",
      ],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

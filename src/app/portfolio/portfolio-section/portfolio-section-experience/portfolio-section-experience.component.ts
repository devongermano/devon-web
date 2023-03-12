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
        "Led the end-to-end development of a flagship product utilizing cutting-edge technologies such as Node.js, Angular, AWS, Redis, PostgreSQL, and Docker, delivering a superior solution to meet customer needs and business objectives.",
        "Directed and managed a team of 6 skilled engineers in an Agile environment, driving successful project completion and ensuring quality assurance, scalability, and maintainability of the codebase.",
        "Designed, developed, and maintained serverless applications utilizing AWS Lambda and the Serverless framework, delivering efficient and cost-effective solutions that aligned with the organization's strategic goals.",
        "Initiated and oversaw the implementation of key architectural improvements to core applications, leveraging best practices and industry standards to achieve optimal performance, security, and scalability.",
      ]
    },
    {
      company: "Smile Direct Club",
      startYear: "2020",
      endYear: "2021",
      logo: 'assets/logos/sdc-l.svg',
      color: '#5700ff',
      bullets: [
        "Applied expertise in multiple technologies, such as Python, Vue.js, Node.js, Django, Redis, PostgreSQL, AWS, and Docker, to deliver projects in a remote work environment.",
        "Collaborated with cross-functional teams to identify and implement architectural enhancements that streamlined operations, increased scalability, and improved system performance.",
        "Developed and tested user-facing applications using Django and Vue.js, ensuring a seamless user experience and delivering high-quality code that met project specifications and requirements.",
      ]
    },
    {
      company: "CPH Technologies",
      startYear: "2015",
      endYear: "2020",
      logo: 'assets/logos/cph-dark.svg',
      color: '#ffbb2d',
      bullets: [
        "Developed and maintained robust, high-quality code in a diverse range of languages, including Go, Kotlin, Python, C#, Typescript, and JavaScript, in a remote work environment.",
        "Designed, implemented, and maintained an efficient and reliable continuous integration and continuous delivery (CI/CD) pipeline using Docker,and CircleCI.",
        "Created visually stunning and intuitive user interfaces by testing, slicing, designing, and implementing mockups for front-end applications using Angular 2+.",
      ],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

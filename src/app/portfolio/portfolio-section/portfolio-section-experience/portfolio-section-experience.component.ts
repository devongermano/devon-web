import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-section-experience',
  templateUrl: './portfolio-section-experience.component.html',
  styleUrls: ['./portfolio-section-experience.component.scss']
})
export class PortfolioSectionExperienceComponent implements OnInit {

  experienceItems = [
    {
      company: "Verb Inc.",
      startYear: "2022",
      endYear: "Present",
      logo: 'assets/logos/verb-l.svg',
      color: 'black',
      bullets: [
        "Conceptualized and implemented efficient CI/CD pipelines with AWS CodePipeline and GitHub, optimizing the software development lifecycle. Further enhanced deployment and scaling of applications using AWS CloudFront and Elastic Beanstalk, bolstering system reliability and accelerating delivery timelines.",
        "Contributed significantly to the full-cycle development of premier products by deftly integrating Node.js, Angular, React, AWS, Redis, MongoDB, and Docker technologies, creating a powerful solutions that fulfilled customer requirements and supported business objectives.",
        "Drove pivotal architectural enhancements in the Verb LIVE application, leveraging industry best practices to maximize performance, security, and scalability.",
        "Architected, developed, and maintained high-performing serverless applications using Nx, AWS Lambda, and the Serverless framework, delivering cost-effective solutions that seamlessly aligned with the company's strategic objectives."
      ]
    },
    {
      company: "Smile Direct Club",
      startYear: "2020",
      endYear: "2022",
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

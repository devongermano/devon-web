import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-section-experience',
  templateUrl: './portfolio-section-experience.component.html',
  styleUrls: ['./portfolio-section-experience.component.scss']
})
export class PortfolioSectionExperienceComponent implements OnInit {

  experienceItems = [
    {
      company: "Hussle Technologies",
      startYear: "2022",
      endYear: "2024",
      logo: 'assets/logos/hussle-w-small.svg',
      color: '#036FFA',
      bullets: [
        "Assumed technical leadership for the 'Live' project after departure of the original architect, managing the Node.js API and successfully implementing CI/CD pipelines using AWS CodePipeline.",
        "Collaborated with the product team to translate product vision into actionable engineering tasks, leveraging Jira to create comprehensive tickets for developers, thereby improving team workflow and productivity.",
        "Served as a technical mentor, providing guidance to junior engineers on the development and troubleshooting of our Angular front-end application, Node.js API, and AWS-based infrastructures, thus fostering best practices and enhancing overall team performance.",
        "Independently drove critical architectural enhancements for the 'Live' project's Node.js API, leading to significant improvements in system performance and scalability. These changes allowed for a substantial increase in user capacity, accommodating hundreds of thousands of active users and drastically reducing API response times from 20 seconds to just 100ms."
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

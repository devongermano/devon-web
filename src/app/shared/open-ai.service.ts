import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


export interface TechnicalInterview {
  programmingLanguage: string;
  questions: string;
}

export interface Answer {
  answer: string;
  explanation: string;
}

export interface Question {
  question: string;
  answers: string[];
}

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  constructor(private http: HttpClient) { }



}

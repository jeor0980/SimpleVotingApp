import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//Service to perform CRUD operations on in-memory-api
export class QuestionService {

  //Doesn't have to set to anything real while using in-memory-api
  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getQuestions(){ 
    return this.httpClient.get(this.SERVER_URL + 'questions');
  }

  public getQuestion(questionId: any){
    return this.httpClient.get(`${this.SERVER_URL + 'questions'}/${questionId}`); 
  }
  public createQuestion(data: [id: string, timestamp:string, question:string, username:string, yesVotes:number, noVotes:number, votersList: string[]]){
    console.log("createQuestion")  
    return this.httpClient.post(`${this.SERVER_URL + 'questions'}`, data)

  }

  public deleteQuestion(questionId: any){
    return this.httpClient.delete(`${this.SERVER_URL + 'questions'}/${questionId}`)
  }
  public updateQuestion(data: {id: string, timestamp:string, question:string, username:string, yesVotes:number, noVotes:number, votersList?: string[]}){
    return this.httpClient.put(`${this.SERVER_URL + 'questions'}/${data.id}`, data)
  }

}
import { Component, OnInit } from '@angular/core';
import { QuestionService} from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'SimpleVotingApp';
  questions: any[] = [];
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    //Gets all questions from in-memory-api
    //TODO: implement on /viewresults and /vote
    this.questionService.getQuestions().subscribe((data : any)=>{
        console.log(data);
        this.questions = data;
    })
  }
}


// TODO: local API implementation 
// public createQuestion(question:Question){
//   this.questionService.createQuestion(question).subscribe((ret)=>{
//         console.log("Policy created: ", ret);
//   });
// }

  // public deleteQuestion(questionId: string){
  //   this.questionService.deleteQuestion(questionId).subscribe((ret)=>{
  //         console.log("Question deleted: ", ret);
  //   })

// public updateQuestion(question: Question){
//     let Question = [question.id, question.timestamp, question.question, question.username, question.yesVotes, question.noVotes, question.votersList];
//     this.questionService.updateQuestion(questionId).subscribe((ret)=>{
//           console.log("Policy updated: ", ret);
//     });
// }
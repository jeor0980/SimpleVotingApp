import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotingDbService } from '../voting-db.service';
import { ViewResultsComponent } from '../view-results/view-results.component';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  username = localStorage.getItem('username')
  public questions = this.getExampleData.createDb().questions
  unansweredQuestions: any[] = []
  // survey_data = localStorage.getItem('local-survey-db')
  //survey_data = JSON.parse(localStorage.getItem('local-survey-db')!);
  constructor(private getExampleData:VotingDbService, private router: Router) { }
  ngOnInit(): void {
    for (let i in this.questions){
      if (this.questions[i]['votersList'].includes(this.username!)) {
        console.log("username found skipping question")
      }
      else {
        console.log(this.questions[i])
        console.log(console.log(new Date()))
        this.unansweredQuestions.push(this.questions[i])
      }
    }
  }

  navigateToDashboard() {
    this.router.navigate(["/dashboard"])
  }

  getUnanswered() {

  }

}

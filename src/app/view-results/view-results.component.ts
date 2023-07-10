import { Component, OnInit } from '@angular/core';
import { VotingDbService } from '../voting-db.service';
import { Router } from '@angular/router';
// import { Question } from '../user-data';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss']
})
export class ViewResultsComponent implements OnInit {
  constructor(private getExampleData: VotingDbService, private router: Router) { }
  // Get Array of objects of Question type ()
  public questions = this.getExampleData.createDb().questions
  
  // localStorage.setItem('app-local-db', this.getExampleData.createDb().questions)

  
  ngOnInit(): void {
    // console.log(this.questions)
    localStorage.setItem('local-survey-db', JSON.stringify(this.questions))
    console.log(localStorage.getItem('local-survey-db'))
  }

  navigateToCreate() {
    this.router.navigate(["/add-question"])
  }
  navigateToVote() {
    this.router.navigate(["/vote"])
  }
  navigateToResults() {
      this.router.navigate(["/results"])
  }
  navigateToDashboard() {
    this.router.navigate(["/dashboard"])
  }

}

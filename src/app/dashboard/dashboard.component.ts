import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // #should always be a string because we're reading json
  username:string = localStorage.getItem('username')!

  constructor(private router: Router) {}
  ngOnInit() {
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
  logout() {
    localStorage.removeItem('username');
    this.router.navigate(["/login"])
}

}

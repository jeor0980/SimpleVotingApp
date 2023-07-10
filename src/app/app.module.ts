import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from'@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { VoteComponent } from './vote/vote.component';
import { ViewResultsComponent } from './view-results/view-results.component';
import { VotingDbService } from './voting-db.service';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddQuestionComponent,
    VoteComponent,
    ViewResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(VotingDbService),
    HttpClientModule
  ],
  providers: [VotingDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

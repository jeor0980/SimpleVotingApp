import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Question } from './user-data';

@Injectable({
  providedIn: 'root'
})

export class VotingDbService implements InMemoryDbService {
  constructor() { }
  createDb(){
    const questions: Question[]=[
      { datestamp: 'May 5th', question: 'Do you like chocolate?', username: 'Joe', yesVotes: 1, noVotes:1, votersList:['optimistic', 'musiclover', 'jesus']},
      { datestamp: 'May 8th', question: 'Do you like TV?', username: 'Jeff', yesVotes: 0, noVotes:2, votersList:['optimistic', 'musiclover', 'jesus']},
      { datestamp: 'May 6th', question: 'Do you like music?', username: 'Jesus', yesVotes: 3, noVotes:1, votersList:['optimistic', 'musiclover'] },
      { datestamp: 'May 2th', question: 'Do you like napping?', username: 'Wicho', yesVotes: 0, noVotes:4, votersList:['optimistic', 'musiclover'] },
      { datestamp: 'May 23th', question: 'Do you like working out?', username: 'Ruben', yesVotes: 5, noVotes:1, votersList:['optimistic', 'musiclover'] }
    ];
    return {questions};
  }

  debugDB(){
    console.log(this.createDb)
  }
}
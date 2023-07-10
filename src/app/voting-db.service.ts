import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Question } from './user-data';

@Injectable({
  providedIn: 'root'
})
//Service to mock an API locally
export class VotingDbService implements InMemoryDbService {
  constructor() { }
  createDb(){
    //TODO: Refactor username to createdBy
    const questions: Question[]=[
      { id: '1', timestamp: 'May 5, 2023', question: 'Do you like chocolate?', username: 'Joe', yesVotes: 1, noVotes:1, votersList:['optimistic', 'musiclover', 'jesus']},
      { id: '2', timestamp: 'May 8, 2023', question: 'Do you like TV?', username: 'Jeff', yesVotes: 0, noVotes:2, votersList:['optimistic', 'musiclover', 'jesus']},
      { id: '3', timestamp: 'May 6, 2023', question: 'Do you like music?', username: 'Jesus', yesVotes: 3, noVotes:1, votersList:['optimistic', 'musiclover', 'John'] },
      { id: '4', timestamp: 'May 2, 2023', question: 'Do you like napping?', username: 'Wicho', yesVotes: 0, noVotes:4, votersList:['optimistic', 'musiclover'] },
      { id: '5', timestamp: 'May 23, 2023', question: 'Do you like working out?', username: 'Ruben', yesVotes: 5, noVotes:1, votersList:['optimistic', 'musiclover'] }
    ];
    return {questions};
  }
}
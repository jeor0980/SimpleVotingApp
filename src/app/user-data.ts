export class Question {
    constructor(public datestamp='', public question= '', public username='', public yesVotes:number, public noVotes:number, public votersList: string[]) {}
  }
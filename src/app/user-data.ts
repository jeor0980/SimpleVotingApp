export class Question {
    constructor(public id:string, public timestamp:string, public question:string, public username:string, public yesVotes:number, public noVotes:number, public votersList: string[]) {}
  }
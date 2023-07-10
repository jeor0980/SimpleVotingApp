import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotingDbService } from '../voting-db.service';

import {
  FormGroup,
  FormBuilder,
  Validators,
  Validator,
  AbstractControl,
  FormControl,
  FormControlName,
} from "@angular/forms";



@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit{
  title = "Formseries";
  questionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private getExampleData: VotingDbService ) {}
  public questions = this.getExampleData.createDb().questions

  ngOnInit() {
    // Form
    this.questionForm = this.fb.group({
      question: ["", [Validators.required, Validators.maxLength(200)]],
    });
  }


  
navigateToDashboard(){
  this.router.navigate(["/dashboard"])
}


  isUnique(){
    let user_input_question = String(this.questionForm.get('question'))
    console.log(this.questionForm.get('question'))
    console.log("pacoooo")
    for (let i in this.questions){
      if (this.questions[i]['question'].includes(user_input_question)) {
        console.log("Found Duplicate")
        return false
      }
    }
    return true
  }

  save() {
    if (this.questionForm.valid && this.isUnique()) {
      console.log("Form valid ");
      // TODO: Logic for saving question data
      this.router.navigate(["/dashboard"])
    }
  }
}

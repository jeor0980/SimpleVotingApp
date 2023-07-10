import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import {
  FormGroup,
  FormBuilder,
  Validators,
  Validator,
  AbstractControl,
  FormControl,
  FormControlName,
} from "@angular/forms";

// Custom Validation code factory validation function

function ageValidator(min: number, max: number) {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (
      control.value !== null &&
      (isNaN(control.value) || control.value < min || control.value > max)
    ) {
      return { ageValidator: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = "Formseries";
  userForm: FormGroup;
  // customer = new Customer();
  username = "";

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    // FormBuilder example
    this.userForm = this.fb.group({
      username: [this.username, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      // email: ["", Validators.required],
      // age: [null, ageValidator(20, 70)],
    });
  }

  // setValue() {
  //   this.username=this.userForm.get('username')?.value; // input value retrieved
  //   console.log("taco")
  //   console.log(this.username)
  // }

  // loadData() {
  //   this.customerForm.patchValue({
  //     firstname: "Nishu",
  //   });
  // }

  save() {
    if (this.userForm.valid) {
      console.log("Form valid ");
      this.username = this.userForm.value['username']
      console.log(this.username)
      localStorage.setItem('username', this.username)
      this.router.navigate(["/dashboard"])
      // this.router.navigate(['/another-page']);
    }
  }
}
import { Component, OnInit } from '@angular/core';
import {
  FormControl, FormGroup, FormBuilder, Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }
  name = new FormControl('');

  ngOnInit(): void {
  }

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8),]),
    cpassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8),]),
  });




  get username() {
    return this.form.get('username');
  }



  get email() {
    return this.form.get('email');
  }


  get password() {
    return this.form.get('password');
  }


  get cpassword() {
    return this.form.get('cpassword');
  }

  RegisterHere() {
    const data = this.form.value;
    console.log(data);
  }





  LoginPage() {
    this.router.navigate(['login']);
  }
}

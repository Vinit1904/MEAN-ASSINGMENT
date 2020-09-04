import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
//import { } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlusG, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }


  faGoogle = faGooglePlusG;
  fafacebook = faFacebookSquare;


  get email() {
    return this.loginform.get('email');
  }


  get password() {
    return this.loginform.get('password');
  }


  loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(12), Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
  });




  loginHere() {
    const data = this.loginform.value;
    //const url = 'http://localhost:3000/adduser';

    //await this.http.post(url, data).toPromise();

    //this.router.navigate(['login']);
    console.log(data);
  }



  RegisterPage() {
    this.router.navigate(['signup']);
  }


  ForgotPage() {
    this.router.navigate(['forgot-password']);
  }

}

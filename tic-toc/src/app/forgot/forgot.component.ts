import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get email() {
    return this.forgot.get('email');
  }


  get password() {
    return this.forgot.get('password');
  }


  forgot = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(12), Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
  });


  ForgotHere() {
    const data = this.forgot.value;
    console.log(data);

  }




  RegisterPage() {
    this.router.navigate(['login']);
  }
}

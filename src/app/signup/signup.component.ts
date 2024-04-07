import { Component } from '@angular/core';
import {  FormControl, ReactiveFormsModule, FormGroup, Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

export const passwordsMatchValidator: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { 'passwordsNotMatching': true };
};

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent {



  constructor(private authService: AuthenticationService, private router:Router, private fb: FormBuilder) { }

  signUpForm = this.fb.group({
    first_name:new FormControl('', [Validators.required]),
    last_name:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required, Validators.email]),
    username:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required]),
    password_confirmation:new FormControl('', [Validators.required]),
  },{validators: passwordsMatchValidator});

  onSubmit() {
    console.log('form submitted');
    const formValue = this.signUpForm;
    console.log(formValue);
    this.authService.signUp(formValue).subscribe({
      next: (res:any) => {
        this.router.navigate(['/login']);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

}
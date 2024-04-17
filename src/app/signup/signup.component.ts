import { Component } from '@angular/core';
import {  FormControl, ReactiveFormsModule, FormGroup, Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const passwordsMatchValidator: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirm_password')?.value;
  return password === confirmPassword ? null : { 'passwordsNotMatching': true };
};

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {

  constructor(private authService: AuthenticationService, private router:Router, private fb: FormBuilder, private userService:UserService) { }

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
    const formValue = this.signUpForm.value;
    console.log(formValue);
    this.userService.signUp(formValue).subscribe({
      next: (res:any) => {
        this.router.navigate(['/login']);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

}

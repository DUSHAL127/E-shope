import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


    user: any ={};
    signUp = new FormGroup({
      firstname : new  FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastname  : new FormControl('',
      [
        Validators.required,
        Validators.minLength(2)
      ]),
      email     : new FormControl('',
      [
        Validators.required,
        Validators.email
      ]),
      password  : new FormControl('',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        passwordStrengthValidator(),
        
      ])
  
    });
  
    constructor(private router:Router){
      
    }
    ngOnInit(): void {
      
    }
    signupDone() {
      console.log(this.signUp?.value);
      this.user =Object.assign(this.user, this.signUp.value);
      localStorage.setItem('Users',JSON.stringify(this.user));
      this.signUp.reset();
      alert("Signup is successfull");
      this.router.navigate(['/login']);

     
    }

    // addUser(user : any) {
    //   let users =[];
    //   if(localStorage.getItem('Users')) {
    //     users = JSON.parse(localStorage.getItem('Users'));
    //     users = [user, ...users];
    //   }else {
    //     users =[user];
    //   }
  
    //   localStorage.setItem('Users',JSON.stringify(this.user));
    // }
  
  }
  
  
  
  export function passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;
  
      if (!value) {
        return null; 
      }
  
  
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  
      if (!regex.test(value)) {
        return { invalidPasswordStrength: true };
      }
  
      return null;
    };
  }
  


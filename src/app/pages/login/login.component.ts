import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { concat } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  flag : boolean = false;
  login = new FormGroup({
    fullname : new  FormControl('',[ 
      Validators.required,
      Validators.minLength(2),
    ]),

    password  : new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
     ])

  });
  
  constructor(private router: Router) {}
  loginDone() {
  
    const storedUserData = localStorage.getItem('Users');
    
    
    if (storedUserData) {
    
      const user = JSON.parse(storedUserData);
  
    
      this.validateLogin(user);

    } else {
      
      console.log('User data not found in local storage');
    }
  }
  validateLogin(user: any) {
    const formValue = this.login.value;
  
   
    if (user.firstname+''+ user.lastname === formValue.fullname  && user.password === formValue.password) {
    
      localStorage.setItem('flagvalue',JSON.stringify(true));
      console.log(this.flag);
      
      this.router.navigate(['/home']);
      
    } else {
      
      alert('Invalid username or password');
     

    }
  } 

  redirectToSignup() {
    this.router.navigate(['/signup']);
  }

  redirectToForgetPassword() {
    this.router.navigate(['/forgetpassword']);
  }

}


  







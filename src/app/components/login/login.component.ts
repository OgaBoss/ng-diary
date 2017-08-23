import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/home']);
    }
    this.createForm();
  }

  createForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', Validators.minLength(5));

    this.loginForm = new FormGroup({
      email : this.email,
      password : this.password
    });
  }

  login() {
    this.authService.login(this.loginForm.value.email , this.loginForm.value.password).subscribe(data => {
      // if is set currentUser redirects
      console.log(localStorage.getItem('currentUser'));
    });
  }
}

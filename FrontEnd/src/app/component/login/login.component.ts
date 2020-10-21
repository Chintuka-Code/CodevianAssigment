import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from '../../service/login-service.service';
import { RegisterServiceService } from '../../service/register-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  register: FormGroup;
  loginResponse;
  registerResponse;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginServiceService,
    private registerService: RegisterServiceService,
    private Router: Router
  ) {}

  loginForm() {
    const data = this.login.getRawValue();
    this.loginService.login(data).subscribe((res) => {
      this.loginResponse = res;
      if (this.loginResponse.err == 0) {
        Swal.fire({
          title: 'Login Success',
          icon: 'success',
        }).then(() => {
          localStorage.setItem('token', this.loginResponse.token);
          localStorage.setItem('email', this.loginResponse.email);
          this.login.reset();
          this.Router.navigate(['/main']);
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: `${this.loginResponse.msg}`,
          icon: 'error',
        });
      }
    });
  }

  RegisterForm() {
    const data = this.register.getRawValue();
    this.registerService.register(data).subscribe((res) => {
      this.registerResponse = res;
      if (this.registerResponse.err == 0) {
        Swal.fire({
          title: 'success',
          text: `Register`,
          icon: 'success',
        }).then(() => {
          localStorage.setItem('token', this.registerResponse.token);
          localStorage.setItem('email', this.registerResponse.email);
          this.register.reset();
          this.Router.navigate(['/main']);
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: `${this.registerResponse.msg}`,
          icon: 'error',
        });
      }
    });
  }

  ngOnInit(): void {
    this.loginValidation();
    this.registerValidation();
  }

  loginValidation() {
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  registerValidation() {
    this.register = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '../core/framework/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  @ViewChild('alerterror') alerterror: ElementRef;

  loginForm: any;
  submitted: boolean;
  invalidCredentials = false;
  constructor(private formBuilder: FormBuilder, _translateService: TranslateService, _router: Router) {
    super(_router, _translateService);
  }

  ngOnInit() {
    this.loginUser();
  }

  loginUser(): any {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.submitted = false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const loginForm = this.loginForm.value;
    if (loginForm.email === 'admin@gmail.com' && loginForm.password === 'Admin@123') {
      localStorage.setItem('profile-info', JSON.stringify({userName: 'Admin'}));
      this._router.navigate(['/dashboard']);
    } else {
      this.invalidCredentials = true;
      const userRecords: any[] = JSON.parse(localStorage.getItem('user-records'));
      userRecords.every((user: any) => {
        if (user.email === loginForm.email && user.password === loginForm.password) {
          this.invalidCredentials = false;
          user.userName = user.firstName + ' ' + user.lastName;
          localStorage.setItem('profile-info', JSON.stringify(user));
          this._router.navigate(['/dashboard']);
          return false;
        } else {
          return true;
        }
      });
    }
    this.loginUser();
  }

}

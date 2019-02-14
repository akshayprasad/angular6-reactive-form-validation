import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbTooltipConfig, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { MustMatch } from './must-match.validator';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  registerForm: FormGroup;
  submitted = false;

  @ViewChild('provision') prov: ElementRef;
  @ViewChildren('tleft') public tooltip: QueryList<NgbTooltip>;

  constructor(private formBuilder: FormBuilder, private config: NgbTooltipConfig) {
    config.placement = 'bottom';
  }

  ngOnInit() {
    this.registerTheForm();
  }

  ngAfterViewInit() { }

  registerTheForm = function () {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });

    this.submitted = false;
  };

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    const records = JSON.parse(localStorage.getItem('user-records')) || [];

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);
    // Localstorage Integration
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    records.push(this.registerForm.value);
    localStorage.setItem('user-records', JSON.stringify(records));
    // Localstorage Integration ends
    this.registerTheForm();
  }
}

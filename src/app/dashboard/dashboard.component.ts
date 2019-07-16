import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profileInfo!: any;

  constructor() { }

  ngOnInit() {
    this.profileInfo = JSON.parse(localStorage.getItem('profile-info'));
  }
}

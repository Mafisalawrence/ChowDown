import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToLogin()
  {
    this.router.navigate(['login']);
  }
  goToSignUp()
  {
    this.router.navigate(['registration']);
  }

}

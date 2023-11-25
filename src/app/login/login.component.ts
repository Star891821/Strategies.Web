import { Component, OnInit } from '@angular/core';
 import { AppComponent } from '../app.component';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private appc: AppComponent,private router: Router) { 
     
  }

  ngOnInit(): void {
     
  }

  login(){
    this.appc.isUserLoggedIn=true;
    this.router.navigate(['/dashboard']);
  }

}

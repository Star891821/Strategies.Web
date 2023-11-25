import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


interface IUser {
  StrategyID: string;
  PrimaryClient: string;
  SecondaryClient: string;
  Date: string;
  Status: string;
  Action: string;   
  avatar: string;   
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

  constructor(private appc: AppComponent) {
    this.appc.isUserLoggedIn=true;
   }

  ngOnInit(): void {
  }

  public users: IUser[] = [
    {
      StrategyID: "SD1001",
      PrimaryClient: "Alex",
      SecondaryClient: "Judith",
      Date: "11-10-2023",
      Status: "Submitted",
      Action: "Generate Strategy",
      avatar: './assets/img/avatars/1.jpg'
    },
    {
      StrategyID: "SD1002",
      PrimaryClient: "Jhon",
      SecondaryClient: "Anderson",
      Date: "12-10-2023",
      Status: "Strategy Generated",
      Action: "Send Mail",
      avatar: './assets/img/avatars/2.jpg'       
    },
    {
      StrategyID: "SD1003",
      PrimaryClient: "Michael",
      SecondaryClient: "Thomas",
      Date: "13-10-2023",
      Status: "Submitted",
      Action: "Generate Strategy",
      avatar: './assets/img/avatars/3.jpg'   
    }
     
  ];

}

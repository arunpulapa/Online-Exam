import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineExam';
  constructor(){
    var users=JSON.parse(localStorage.getItem('users'));
    if(users == undefined || users ===null){
      users=[];
    }
    users.push({username:"admin",password:"admin",role:"admin"});
    localStorage.setItem('users',JSON.stringify(users));
  }
}

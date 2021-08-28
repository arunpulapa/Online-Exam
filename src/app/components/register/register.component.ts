import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register(data:any){
    var users=JSON.parse(localStorage.getItem('users'));
    if(users == undefined || users ===null){
      users=[];
    }
    data['role']="user";
    users.push(data);
    localStorage.setItem('users',JSON.stringify(users));
    alert("User registered Successfully");
    this.router.navigate(['/login']);
  }
}

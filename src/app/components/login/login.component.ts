import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(data:any){
    var users=JSON.parse(localStorage.getItem('users'));
    if(data['username'] === "admin12345" && data['password'] ==="admin12345" && data['role'] ==="admin"){
      //alert("Admin logged in successfully");
      this.router.navigate(['admin/userinfo']);
    }
    else{
      for (const iterator of users) {
        if(data['username'] ===iterator['username'] && data['password'] === iterator['password']){
          //alert("User logged in successfully");
          this.router.navigate(['user/profile']);
        }
        else{
          alert("Invalid Username or Password");
        }    
      
    }
    }
    
  }

}

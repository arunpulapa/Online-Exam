import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  students:any[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getStudentDetails().subscribe((data)=>{
      this.students=data;
    },(error)=>{console.log(error)})
  }

}

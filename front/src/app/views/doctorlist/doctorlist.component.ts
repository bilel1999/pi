import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from 'src/app/core/Model/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {
  Users:any;
  allUsers:number=0;
  pagination:number=1;
  constructor(private userService: UserService,private route:Router ,private toastr: ToastrService) {}
user!:User;
userList!: User[] ; 
search!:string;
searchText!:string;

  ngOnInit(): void {
    this.fetchDoctor();
    console.log(this.fetchDoctor());

this.allUser();
this.user=new User();
  }
  setSearch(event:any){
    console.log("value",event.target.value);
    this.search =event.target.value;
  }
  FindbyNom(){
    
    this.userService.findByNom(this.search).subscribe((res) => {
      console.log("list from res :",res);
      if (res.length!=0){
        this.userList = res;
      }
      else{
        this.userList = [];
      }
      
    });

  }
  allUser() {
    this.userService.getAll().subscribe((res) => {
      this.userList = res.filter(user => user.role === 'Doctor');
    });
  }
  
add() {
  this.userService.create
    (this.user)
    .subscribe(
      () => (this.userList = [this.user, ...this.userList])
    );
}
fetchDoctor() {
  this.userService.findByNom(this.pagination).subscribe((res: any) => { 
  this.Users=res.data;
  this.allUsers=res.total;
  console.log(res.total);
  });
}
renderPage(event:number){
  this.pagination=event;
  this.fetchDoctor();
}
}

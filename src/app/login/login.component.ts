import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  
  } 
  // changeauto:any
//   checkPass(firstname:string,lastname:string,email:string,password:string){
//     if(firstname==localStorage.getItem("firstname")&&lastname==localStorage.getItem("lastname")&&
//     email==localStorage.getItem("email")&& password==localStorage.getItem("password"))

// }

  // myimg="../../assets/color2.jpg"
  // user(name:string,pass:string){
  //   alert(name+":"+pass)
  // }

}


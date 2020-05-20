import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm
  public checkbox
  constructor(public router:Router,
    private formBuilder: FormBuilder,) {
      this.loginForm = this.formBuilder.group({
        "userName": ['Tên đăng nhập', Validators.required],
        "password": ['Mật khẩu', Validators.required],
        
      });
     }
  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
  onLogin(data){
    console.log(data)
    if(data.userName=="admin"&&data.password=="admin"){
      this.navigate('hrm')
    }
  }

  ngOnInit(): void {
  }
  
}

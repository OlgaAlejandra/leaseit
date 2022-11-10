import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myForm!: FormGroup;
  user !: User;
  idUser:any;
  basePath:string=environment.api_url;

constructor(
  private fb:FormBuilder, 
  private snackBar: MatSnackBar,
  private router:Router,
  private http : HttpClient) {}

  ngOnInit(): void {
    this.myForm=this.fb.group({
      email:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>(`${this.basePath}/users`)
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.myForm.value.email && a.password === this.myForm.value.password
      });
      if(user){
        this.snackBar.open('Login correcto!', '', {
          duration: 3500,
        });
        this.myForm.reset();
        this.router.navigate(['/home',user.id]);
      }else{
        this.snackBar.open('Error en las credenciales!', '', {
          duration: 3000,
        });
      }
    },err=>{
      alert("Algo esta mal!")
    })
  }
}

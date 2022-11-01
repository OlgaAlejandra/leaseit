import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myForm !: FormGroup;

  constructor( private fb:FormBuilder,
    private userService:UserService,
    private snackBar: MatSnackBar,
    private router:Router) {this.reactiveForm(); }

  ngOnInit(): void {
  }
  reactiveForm(){
    this.myForm = this.fb.group({
      id:[''],
      name: ['',[Validators.required,Validators.maxLength(40)]],
      RUC:['',[Validators.required,Validators.minLength(11) ]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    })
  }
  saveUser():void{
    const user: User= {
      id: 0,
      name: this.myForm.get('name')!.value,
      RUC: this.myForm.get("RUC")!.value,
      email: this.myForm.get('email')!.value,
      passowrd: this.myForm.get("password")!.value
    };
    this.userService.addUser(user).subscribe({
      next: (data) => {
        this.snackBar.open('El usuario fue registrado con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}

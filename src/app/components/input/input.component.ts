import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Operation } from './../../models/operation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArrendadorService } from './../../services/arrendador.service';
import { ActivoService } from './../../services/activo.service';
import { Activo } from './../../models/activo';
import { Arrendador } from './../../models/arrendador';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public myForm!: FormGroup;
  user!: User;
  activos: Activo[]=[];
  arrendadores: Arrendador[]=[];
  activo?: Activo;
  arrendador!: Arrendador;
  idUser: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activosService: ActivoService,
    private arrendadoresService: ArrendadorService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    
    const variable = this.route.snapshot.paramMap.get('id');
    this.idUser = variable;
    this.reactiveForm();
    this.getData();
  }
  getData(){
    this.activosService.getActivos().subscribe((data: any)=>{
      this.activos=data;
    },
    (error: any) => {
      console.log('error al consultar activos');
    });
    this.arrendadoresService.getArrendadores().subscribe((data: any)=>{
      this.arrendadores=data;
    },
    (error: any) => {
      console.log('error al consultar activos');
    });
  }
  reactiveForm(){
    this.myForm=this.fb.group({
      id:[''],
      usuario:['',Validators.required],
      activo: ['', Validators.required],
      arrendador:['', Validators.required],
      moneda:['', Validators.required],
      prestamo:['',Validators.required],
      tasa:['',Validators.required],
      tiempo:['',Validators.required],
      pgp_flag:['',Validators.required],
      pgp_time:['',Validators.required],
      pgt_flag:['',Validators.required],
      pgt_time:['',Validators.required],
      n_periodos:['',Validators.required],
      tasa_type:['',Validators.required],
      t_tasa:['',Validators.required],

    })
  }
  fillActivo(){
    var temporal = [(this.myForm.value)];
    console.log(temporal)
    this.activosService.getActivoId("1").subscribe((data: Activo)=>{
      this.myForm = this.fb.group({
        prestamo:[data.precio,Validators.required]
      })
      //console.log(data);
    })
    console.log(temporal)

    /* this.myForm=this.fb.group({
      prestamo:[,Validators.required]  
    }); */
  }
  fillArrendador(){
    this.myForm=this.fb.group({
      tasa:[this.arrendadores[(this.myForm.get('arrendador')!.value)].TEP,Validators.required]
  })
  }

}

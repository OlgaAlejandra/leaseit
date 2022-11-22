import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Operation } from './../../models/operation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArrendadorService } from './../../services/arrendador.service';
import { ActivoService } from './../../services/activo.service';
import { Activo } from './../../models/activo';
import { Arrendador } from './../../models/arrendador';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  arrendador?: Arrendador;
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
    var temporal = [(this.myForm.get('activo')?.value)];
    console.log(temporal)
    this.activosService.getActivoId(this.myForm.get('activo')?.value).subscribe((data: Activo)=>{
      this.myForm = this.fb.group({
        activo: [data.id, Validators.required],
        arrendador:[this.myForm.get('arrendador')?.value, [Validators.required]],
        moneda:[this.myForm.get('moneda')?.value,[Validators.required]],
        prestamo:[data.precio,Validators.required],
        tasa:[this.myForm.get('tasa')?.value,[Validators.required]],
        tiempo:[this.myForm.get('tiempo')?.value,[Validators.required]],
        pgp_flag:[this.myForm.get('pgp_flag')?.value,[Validators.required]],
        pgp_time:[this.myForm.get('pgp_time')?.value,[Validators.required]],
        pgt_flag:[this.myForm.get('pgt_flag')?.value,[Validators.required]],
        pgt_time:[this.myForm.get('pgt_time')?.value,[Validators.required]],
        n_periodos:[this.myForm.get('n_periodos')?.value,[Validators.required]],
        tasa_type:[this.myForm.get('tasa_type')?.value,[Validators.required]],
        t_tasa:[this.myForm.get('t_tasa')?.value,[Validators.required]],
      })})
    
    console.log(this.myForm.value)
  } 
  fillArrendador(){
    this.arrendadoresService.getArrendadorId(this.myForm.get('arrendador')?.value).subscribe((data: Arrendador)=>{
      this.myForm = this.fb.group({
        activo: [this.myForm.get('activo')?.value, [Validators.required]],
        arrendador:[data.id, [Validators.required]],
        moneda:[this.myForm.get('moneda')?.value, [Validators.required]],
        prestamo:[this.myForm.get('prestamo')?.value,[Validators.required]],
        tasa:[data.TEP,[Validators.required]],
        tiempo:[this.myForm.get('tiempo')?.value,[Validators.required]],
        pgp_flag:[this.myForm.get('pgp_flag')?.value,[Validators.required]],
        pgp_time:[this.myForm.get('pgp_time')?.value,[Validators.required]],
        pgt_flag:[this.myForm.get('pgt_flag')?.value,[Validators.required]],
        pgt_time:[this.myForm.get('pgt_time')?.value,[Validators.required]],
        n_periodos:[this.myForm.get('n_periodos')?.value,[Validators.required]],
        tasa_type:[data.tasa_type,,Validators.required],
        t_tasa:[data.t_tasa,,Validators.required],
      })})
      console.log(this.myForm.value)
  }
  changeClient(value: any) {
    console.log(value);
}
}

import { Arrendador } from './../../models/arrendador';
import { Activo } from './../../models/activo';
import { Output } from './../../models/output';
import { Operation } from './../../models/operation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivoService } from 'src/app/services/activo.service';
import { ArrendadorService } from 'src/app/services/arrendador.service';

const ELEMENT_DATA: Output[]=[
  
  /*{ 
    periodo: 6,
    pg:"S",
    saldo_i:1000,
    interes:1,
    cuota:1,
    amortizacion:1,
    s_riesgo:1,
    comision:1,
    recompra:1,
    saldo_f:1,
    depreciacion:1,
    a_tributario:1,
    IGV:1,
    f_bruto:1,
    f_bruto_igv:1,
    flujo_neto:1
  }*/
]
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'TEP'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  arrendador!: Arrendador;
  activo!: Activo
  columns=[
    {titulo:"test",name:"id"}
  ]
  constructor(private arrendadorService: ArrendadorService,
              private activoService: ActivoService) { }
  /*Originalmente como pueden ver en la otra clase con datos de entradas
  jalamos los datos que vienen con el activo y el arrendador asi que eso mismo pienso hacer
  vallan ideando una manera de llenar el arreglo con el for siguiendo la logica del excel porfavor
  voy a estar ocupado con otro curso hasta el domingo*/
  ngOnInit(): void {
    this.EntryData();
    ELEMENT_DATA.push()
    for (let i = 0; i < 5; i++) {

    }
  }

  EntryData(){
    this.arrendadorService.getArrendadorId(1).subscribe((data:Arrendador)=>{
      this.arrendador = data;
    });
    this.activoService.getActivoId(1).subscribe((data:Activo)=>{
      this.activo = data;
    });
  }

}

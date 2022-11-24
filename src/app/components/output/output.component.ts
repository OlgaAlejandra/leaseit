import { OperationService } from 'src/app/services/operation.service';
import { Arrendador } from './../../models/arrendador';
import { Activo } from './../../models/activo';
import { Output } from './../../models/output';
import { Operation } from './../../models/operation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivoService } from 'src/app/services/activo.service';
import { ArrendadorService } from 'src/app/services/arrendador.service';
import { DataSource } from '@angular/cdk/collections';

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
  displayedColumns: string[] = ['n°', 'P.G', 'Saldo Inicial','Intereses','Cuota','Amortizacion',
'Seguro Riesgo','Recompra','Saldo Final','Depreciacion','Ahorro Tributario','IGV','Flujo Bruto',
'Flujo con IGV','Flujo Neto'];
  dataSource = new MatTableDataSource<Output>();
  output! : Output[];
  operation!: Operation;
  constructor(private operationService: OperationService) { }
  ngOnInit(): void {
    this.EntryData();
   
  }

  EntryData(){
    this.operationService.getOperationId(1).subscribe((data: Operation) => {
     this.operation=data;
    });
    console.log(((this.operation.tiempo_o*360))/this.operation.frecuencia)
  }
  fillTable(input: Operation){
    for (let i = 0; i < ((this.operation.tiempo_o*360))/this.operation.frecuencia; i++) {

        this.output[i].periodo
    }
  }

}

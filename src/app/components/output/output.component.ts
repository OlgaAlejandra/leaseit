import { Output } from './../../models/output';
import { Operation } from './../../models/operation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  columns=[
    {titulo:"test",name:"id"}
  ]
  constructor() { }
  /*La idea que tengo es jalar el valor de los otros componentes por el momento
  dejemoslo aqui*/
  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {

    }
  }

}

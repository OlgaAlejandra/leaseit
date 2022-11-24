import { MatFormFieldModule } from '@angular/material/form-field';
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
 /*  displayedColumns: string[] = ['n°', 'P.G', 'Saldo Inicial','Intereses','Cuota','Amortizacion',
'Seguro Riesgo','Recompra','Saldo Final','Depreciacion','Ahorro Tributario','IGV','Flujo Bruto',
'Flujo con IGV','Flujo Neto']; */
  displayedColumns: string[] = ['periodo','pg','saldo_i','interes','cuota',
'amortizacion','s_riesgo','comision','recompra','saldo_f','depreciacion',
'a_tributario','IGV','f_bruto','f_bruto_igv','flujo_neto']
  dataSource = new MatTableDataSource<Output>();
  outputs: Output[]=[];
  operation!: Operation;
  temp!: Output;
  activo!: Activo;
  arrendador!: Arrendador;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private operationService: OperationService) { }
  ngOnInit(): void {
    this.EntryData();   
  }
  EntryData(){
    this.fillOutput()
    console.log(this.temp)
    this.operationService.getOperationId(1).subscribe((data: any) => {
      this.operation=data;
    },(error: any) => {
      console.log('error al consultar activos');
    });
  }
  fillTable(input: Operation){
    for (let i = 0; i <=((this.operation.tiempo_o*360)/this.operation.frecuencia); i++) {
        this.temp.periodo=i;
        if(this.operation.pgp_flag==false && this.operation.pgt_flag ==false){
          this.temp.pg='S'}
        else if(this.operation.pgp_flag==true){
          this.temp.pg='P'
        }
        else if(this.operation.pgt_flag==true){
          this.temp.pg='T'
        }

        /*if(i=0){
          this.temp.periodo=0;
          this.temp.saldo_i=0;
          this.temp.cuota=0;
          this.temp.amortizacion=0;
          this.temp.s_riesgo=0;
          this.temp.comision=0;
          this.temp.recompra=0;
          this.temp.saldo_f=this.operation.activo.precio-this.operation.activo.g_inicial;
          this.temp.depreciacion=0;
          this.temp.a_tributario=0;
          this.temp.IGV=0;
          this.temp.f_bruto=this.temp.saldo_f;
          this.temp.f_bruto_igv=this.temp.saldo_f;
          this.temp.flujo_neto=this.temp.saldo_f;
        }        */
        console.log(this.temp)
        this.outputs.push(this.temp)
        console.log(this.outputs)
    }
    this.dataSource = new MatTableDataSource<Output>(this.outputs)
    this.dataSource.paginator = this.paginator;

  }
  test(){
    console.log(this.operation);
    console.log(((this.operation.tiempo_o*360))/this.operation.frecuencia)
    this.fillTable(this.operation)
    
  }
  fillOutput(){
    this.temp= new Output(1,"1",1,1,1,1,1,1,1,1,1,1,1,1,1,1);
  }
}

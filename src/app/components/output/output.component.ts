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
import { from } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  displayedColumns: string[] = ['periodo','pg','saldo_i','interes','cuota',
'amortizacion','s_riesgo','comision','recompra','saldo_f','depreciacion',
'a_tributario','IGV','f_bruto','f_bruto_igv','flujo_neto']
  dataSource = new MatTableDataSource<Output>();
  outputs: Output[]=[];
  operation!: Operation;

  activo!: Activo;
  arrendador!: Arrendador;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private operationService: OperationService) { }
  ngOnInit(): void {
    this.EntryData();
    this.fillTable(this.operation);   
    
  }
  EntryData(){
    this.operationService.getOperationId(3).subscribe((data: Operation) => {
      this.operation=data;
      this.activo = data.activo;
      this.arrendador = data.arrendador;
    },(error: any) => {
      console.log('error al consultar activos');
    });
    
  }
  fillTable(input: Operation){
    var TEP:number = this.getTasaEfectivaPeriodica(this.operation.frecuencia,this.arrendador.tep,
    this.arrendador.tasa_type,this.getTiempoTasaEfectivaPeriodica(this.arrendador.t_tasa));
    var Periodos:number=((this.operation.tiempo_o*360)/this.operation.frecuencia);
    var Cuota:number = ((this.operation.activo.precio/1.18)+this.operation.activo.g_inicial)*TEP/(1-Math.pow((1+TEP),-Periodos));
    console.log(Periodos);
    console.log(Cuota);
    for (let i = 0; i <=Periodos; i++) {
      var result: Output = new Output(i,'i',i,i,i,i,i,i,i,i,i,i,i,i,i,i);

      if(i==0){
       result.periodo=0;
       result.saldo_i=0;
       result.cuota=0;
       result.amortizacion=0;
       result.s_riesgo=0;
       result.comision=0;
       result.recompra=0;
       result.saldo_f=(this.operation.activo.precio/1.18)+this.operation.activo.g_inicial;
       result.depreciacion=0;
       result.a_tributario=0;
       result.IGV=0;
       result.f_bruto=result.saldo_f;
       result.f_bruto_igv=result.saldo_f;
       result.flujo_neto=result.saldo_f;
      }        

      result.periodo = i;

      if(this.operation.pgp_flag==false && this.operation.pgt_flag ==false){
        result.pg='S'}
      else if(this.operation.pgp_flag==true){
        result.pg='P'
      }
      else if(this.operation.pgt_flag==true){
        result.pg='T'
      }

      if(i>0){
        result.saldo_i=this.outputs[i-1].saldo_f;

        result.interes=(result.saldo_i*TEP);

        result.cuota=Cuota;
        
        result.amortizacion=(result.cuota-result.interes);

        result.s_riesgo=(this.activo.precio*(this.arrendador.s_riesgo/100)/12);

        result.comision=(this.arrendador.comision)

        if(i==Periodos){
          result.recompra=((this.activo.precio/1.18)*(this.arrendador.p_recompra/100));
          result.saldo_f= Number((result.saldo_i-result.amortizacion).toFixed(1));
        }
        else{
          result.recompra=0;
          result.saldo_f=result.saldo_i-result.amortizacion;
        }

        result.depreciacion=(this.operation.activo.precio/1.18)/Periodos;
        
        result.a_tributario= (result.interes+result.s_riesgo+result.comision+result.depreciacion)*(12/100);

        result.IGV= (result.cuota+result.s_riesgo+result.comision+result.recompra)*(18/100);

        result.f_bruto=(result.cuota+result.s_riesgo+result.comision+result.recompra);
        
        result.f_bruto_igv=result.f_bruto;+result.IGV;

        result.flujo_neto=result.f_bruto_igv-result.a_tributario;
      }

      console.log(result)
      this.outputs.push(result);
    }
  }
  test(){
    console.log(this.operation);
    console.log(this.activo);
    console.log(this.arrendador);
    /*console.log(this.temp)*/
    this.fillTable(this.operation)
    console.log(this.getTiempoTasaEfectivaPeriodica(this.arrendador.t_tasa));
    console.log(this.getTasaEfectivaPeriodica(this.operation.frecuencia,this.arrendador.tep,
      this.arrendador.tasa_type,this.getTiempoTasaEfectivaPeriodica(this.arrendador.t_tasa)));
    
  }

  getTasaEfectivaPeriodica(a: number, b: number, c: string,d: number){
    var TEP:number=0;
    if(c == "Nominal"){
      TEP = Math.pow((1+(b/100)/d),(a/1))-1;
    }
    else{
      TEP=Math.pow((1+(b/100)),(a/d))-1;
    }
    return TEP;
  }

  getTiempoTasaEfectivaPeriodica(x: string){
    var tiempo: number=0;
    switch(x){
      case "Mensual":
        tiempo = 30;
        break;
      case "Bimestral":
        tiempo = 60;
        break;
      case "Trimestral":
        tiempo = 90;
        break;
      case "Cuatrimestral":
        tiempo = 120;
        break;
      case "Semestral":
        tiempo = 180;
        break;
      case "Anual":
        tiempo = 360;
        break;
    }
    return tiempo;
  }
}

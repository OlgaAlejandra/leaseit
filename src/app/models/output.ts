import { never } from "rxjs";


export class Output{
    periodo: number;
    pg:string;
    saldo_i:number;
    interes:number;
    cuota:number;
    amortizacion:number;
    s_riesgo:number;
    comision:number;
    recompra:number;
    saldo_f:number;
    depreciacion:number;
    a_tributario:number;
    IGV:number;
    f_bruto:number;
    f_bruto_igv:number;
    flujo_neto:number;

    constructor(a:number,b:string,c:number,d:number,e:number,f:number,g:number,
        h:number,i:number,j:number,k:number,l:number,m:number,n:number,o:number,p:number,){
            this.periodo=a;
            this.pg=b;
            this.saldo_i=c;
            this.interes=d;
            this.cuota=e;
            this.amortizacion=f;
            this.s_riesgo=g;
            this.comision=h;
            this.recompra=i;
            this.saldo_f=j;
            this.depreciacion=k;
            this.a_tributario=l;
            this.IGV=m;
            this.f_bruto=n;
            this.f_bruto_igv=o;
            this.flujo_neto=p;
    };
    
    setPeriodo(p: number){
        this.periodo=p
    }
    setPG(p: string){
        this.pg=p
    }
    setSaldo_i(p: number){
        this.saldo_i=p
    }
    setInteres(p: number){
        this.interes=p
    }
    setCuota(p: number){
        this.cuota=p
    }
    setAmortizacion(p: number){
        this.amortizacion=p
    }
    setS_riesgo(p: number){
        this.s_riesgo=p
    }
    setComision(p: number){
        this.comision=p
    }
    setRecompra(p: number){
        this.recompra=p
    }
    setSaldo_f(p: number){
        this.saldo_f=p
    }
    setDepreciacion(p: number){
        this.depreciacion=p
    }
    setA_tributario(p: number){
        this.a_tributario=p
    }
    setIGV(p: number){
        this.IGV=p
    }
    setF_bruto(p: number){
        this.f_bruto=p
    }
    setF_bruto_igv(p: number){
        this.f_bruto_igv=p
    }
    setF_neto(p: number){
        this.flujo_neto=p
    }

}

   

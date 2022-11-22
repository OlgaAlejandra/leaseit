import { User } from './user';
export interface Operation {
    id_operation:number;
    user: any;
    arrendador:any;
    activo: any;
    moneda:string;
    pgp_flag:boolean;
    pgt_flag:boolean;
    pgt_time:number;
    pgp_time:number;
    p_financiado:number;
    tiempo_o:number;
    frecuencia_p:number;
}
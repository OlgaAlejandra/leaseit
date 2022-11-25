import { Activo } from './activo';
import { Arrendador } from './arrendador';
import { User } from './user';
export interface Operation {
    id_operation:number;
    user: User;
    arrendador:Arrendador;
    activo: Activo;
    moneda:string;
    pgp_flag:boolean;
    pgt_flag:boolean;
    pgt_count:number;
    pgp_count:number;
    p_financiado:number;
    tiempo_o:number;
    frecuencia:number;
}
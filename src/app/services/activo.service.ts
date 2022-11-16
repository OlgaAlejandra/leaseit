import { Activo } from './../models/activo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ActivoService {
  basePath: string=environment.api_url;
  constructor(private http:HttpClient) {}
  getActivos() {
    return this.http.get<Activo[]>(`${this.basePath}/activos`);
  }

  getActivoId(id:any){
    return this.http.get<Activo>(`${this.basePath}/activos/${id}`);
  }
}

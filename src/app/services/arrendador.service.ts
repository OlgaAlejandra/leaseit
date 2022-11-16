import { Arrendador } from './../models/arrendador';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  basePath: string=environment.api_url;
  constructor(private http:HttpClient) {}
  getArrendadores() {
    return this.http.get<Arrendador[]>(`${this.basePath}/arrendadores`);
  }

  getArrendadorId(id:any){
    return this.http.get<Arrendador>(`${this.basePath}/arrendadores/${id}`);
  }
}

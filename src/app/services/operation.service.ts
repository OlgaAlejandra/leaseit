import { Operation } from './../models/operation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  basePath: string=environment.api_url;
  constructor(private http:HttpClient) {}
  getOperations() {
    return this.http.get<Operation[]>(`${this.basePath}/operations`);
  }

  getOperationId(id:any){
    return this.http.get<Operation>(`${this.basePath}/operations/${id}`);
  }
  addOperation(operation: Operation) {
    return this.http.post<Operation>(`${this.basePath}/operations`,operation);  
  }
}

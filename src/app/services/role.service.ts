import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  
  
  private baseURL = "https://envirobank.herokuapp.com";

  constructor(private httpClient: HttpClient) { }
  
  roles(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseURL}/roles`);
  }

  addRole(role: any): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addRole`, role, httpOptions);
  }

  linkRole(userId: number, roleId: number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/linkRole`, {userId, roleId}, httpOptions);
  }

  getRole(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/role/${id}`);
  }

  deleteRole(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteRole/${id}`);
  }
  

}

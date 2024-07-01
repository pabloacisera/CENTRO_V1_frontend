import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Clientes } from '../clientes';

@Injectable({
  providedIn: 'root'
})
export class ServicoListaService{

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.url);
  }

  deleteClientById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}

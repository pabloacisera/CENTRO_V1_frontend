import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Clientes } from '../clientes';

@Injectable({
  providedIn: 'root'
})
export class ActualizarFicha {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  updateClient(id: number, client: Partial<Clientes>): Observable<Clientes> {
    return this.http.patch<Clientes>(`${this.url}/${id}`, client);
  }
}

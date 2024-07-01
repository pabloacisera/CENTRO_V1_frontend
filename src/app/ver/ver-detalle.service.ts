import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../clientes';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerDetalleService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDataById(id: number): Observable<Clientes>{
    return this.http.get<Clientes>(`${this.url}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clientes } from '../clientes';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPostService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  crearFicha(data: Clientes[]): Promise<Clientes[]> {
    return lastValueFrom(this.http.post<Clientes[]>(this.apiUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }));
  }
}

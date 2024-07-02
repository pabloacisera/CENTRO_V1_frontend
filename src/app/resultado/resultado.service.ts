import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envNom, environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { Resultado } from './interface.resultado';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor(private http:HttpClient) {}

  private url = envNom.apiUrl;

  consultarCodigo(codigo: string): Observable<Resultado[]> {
    return this.http.get(`${this.url}/${codigo}`).pipe(
      map(response => response as Resultado[]) // cast response to Resultado[]
    );
  }

  consultarDeterminacion(determinacion: string): Observable<Resultado[]> {
    return this.http.get(`${this.url}/text/${determinacion}`).pipe(
      map(response => response as Resultado[]) // cast response to Resultado[]
    );
  }
}

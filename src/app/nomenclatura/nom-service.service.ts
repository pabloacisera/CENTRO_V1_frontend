import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envNom } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Nomenclatura } from '../nomenclatura';

@Injectable({
  providedIn: 'root'
})
export class NomServiceService {

  private api = envNom.apiUrl;

  constructor(private http: HttpClient) { }

  getNomenclatura(): Observable<Nomenclatura[]>{
    return this.http.get<Nomenclatura[]>(this.api);
  }

}

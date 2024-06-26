import { Injectable } from '@angular/core';
import axios from 'axios';
import { enviroment } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = enviroment.endopints;

  constructor() {}

  createClient(data: any) {
    return axios.post('http://localhost:3000/api/v1/client', data);
  }
 
  getAllClients() {
    return axios.get(`http://localhost:3000/api/v1/client`);
  }

  getClientById(id: number){
    return axios.get(`${this.apiUrl}client/${id}`);
  }

  updateClient(id: number, data: any) {
    return axios.put(`${this.apiUrl}client/${id}`, data);
  }

  deleteClient(id: number) {
    return axios.delete(`http://localhost:3000/api/v1/client/${id}`);
  }

}

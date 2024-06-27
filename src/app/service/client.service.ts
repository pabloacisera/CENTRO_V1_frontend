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

  updateClient(id: number, data: any): Promise<any> {
    return axios.patch(`http://localhost:3000/api/v1/client/${id}`, data)
      .catch(error => {
        console.error('Error en la solicitud PATCH:', error);
        throw error; // Re-lanza el error para manejarlo en el componente
      });
  }

  deleteClient(id: number) {
    return axios.delete(`http://localhost:3000/api/v1/client/${id}`);
  }

}

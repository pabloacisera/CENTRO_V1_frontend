import { Component, Input, OnInit } from '@angular/core';
import { Clients } from '../../interfaces/clients';
import { RouterLink } from '@angular/router';
import { ClientService } from '../../service/client.service';
import { DateFormatPipe } from './date-format.pipe';


@Component({
  selector: 'app-listclients',
  standalone: true,
  imports: [RouterLink, DateFormatPipe],
  templateUrl: './listclients.component.html',
  styleUrl: './listclients.component.css',
})
export class ListclientsComponent implements OnInit {

  constructor( private clientService: ClientService) {}

  public listClients: Clients[] = [];

  ngOnInit(): void {
    this.getAll()
  }

  async getAll(){
    try {
      const response = await this.clientService.getAllClients();
      console.log(response);
      this.listClients = response.data
    } catch (error) {
      console.error(error);
    }
  }
}

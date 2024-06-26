import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Clients } from '../../interfaces/clients';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DateFormatPipe } from '../listclients/date-format.pipe';

@Component({
  selector: 'app-view-client',
  standalone: true,
  imports: [DateFormatPipe],
  templateUrl: './view-client.component.html',
  styleUrl: './view-client.component.css',
})
export class ViewClientComponent implements OnInit {
  public clientById: Clients[] = [];
  public loading = false;
  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getClientById(+id); // '+' convierte el string a number
    }
  }

  async getClientById(id: number) {
    try {
      this.loading = true;
      setTimeout(async () => {
        const getClient = await this.clientService.getClientById(id);
        this.clientById = [getClient.data];
        console.log('Usuario obtenido: ', this.clientById);
        this.loading = false;
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
}

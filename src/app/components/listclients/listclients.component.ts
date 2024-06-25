import { Component, Input, OnInit } from '@angular/core';
import { Clients } from '../../interfaces/clients';
import { RouterLink } from '@angular/router';
import { ClientService } from '../../service/client.service';
import { DateFormatPipe } from './date-format.pipe';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'

@Component({
  selector: 'app-listclients',
  standalone: true,
  imports: [
    RouterLink,
    DateFormatPipe,
    ProgressBarComponent,
  ],
  templateUrl: './listclients.component.html',
  styleUrl: './listclients.component.css',
})
export class ListclientsComponent implements OnInit {
  constructor(
    private _clientService: ClientService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  public listClients: Clients[] = [];
  public isLoading: boolean = true;

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(){
    this._clientService.getAllClients().then((data)=>{
      this.listClients = data.data;
      this.isLoading = false;
      this.toastr.success('Se han actualizado los registros', 'Actualizacion de estado' )
    })
  } 

  deleteClient(id: number): void {
    this._clientService.deleteClient(id).then(() => {
      this.getAllClients();
      this.toastr.warning('Se han eliminado registros', 'Actualizacion de estado');
    });
  }
}

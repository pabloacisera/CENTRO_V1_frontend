import { Component, Input, OnInit } from '@angular/core';
import { Clients } from '../../interfaces/clients';
import { RouterLink } from '@angular/router';
import { ClientService } from '../../service/client.service';
import { DateFormatPipe } from './date-format.pipe';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ViewClientComponent } from '../view-client/view-client.component';
import { CommonModule } from '@angular/common';
import { CreatedAtPipe } from './createdAt.pipe';

@Component({
  selector: 'app-listclients',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DateFormatPipe,
    ProgressBarComponent,
    ViewClientComponent,
    CreatedAtPipe,
  ],
  templateUrl: './listclients.component.html',
  styleUrls: ['./listclients.component.css'],
})
export class ListclientsComponent implements OnInit {
  constructor(
    private _clientService: ClientService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  public listClients: Clients[] = [];
  public paginatedClients: Clients[] = [];
  public isLoading: boolean = true;
  public currentPage: number = 1;
  public itemsPerPage: number = 10; // Número de elementos por página
  public totalPages: number[] = [];

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients() {
    this._clientService.getAllClients().then((data) => {
      this.listClients = data.data;
      this.sortClients();
      this.isLoading = false;
      this.toastr.success('Se han actualizado los registros', 'Actualizacion de estado');
      this.setPagination();
    });
  }

  setPagination() {
    const totalItems = this.listClients.length;
    const pages = Math.ceil(totalItems / this.itemsPerPage);
    this.totalPages = Array.from({ length: pages }, (_, i) => i + 1);
    this.paginateClients();
  }

  paginateClients() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedClients = this.listClients.slice(start, end);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages.length) {
      return;
    }
    this.currentPage = page;
    this.paginateClients();
  }

  trackById(index: number, item: Clients) {
    return item.id; // O el campo único que identifica cada cliente
  }

  deleteClient(id: number): void {
    this._clientService.deleteClient(id).then(() => {
      this.getAllClients();
      this.toastr.warning('Se han eliminado registros', 'Actualizacion de estado');
    });
  }

  sortClients() {
    this.listClients = this.listClients.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
  }
}

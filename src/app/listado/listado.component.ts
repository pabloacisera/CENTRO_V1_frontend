import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ServicoListaService } from './servico-lista.service';
import { Clientes } from '../clientes';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DateFormatPipe } from '../date-format.pipe';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [SpinnerComponent, RouterLink, DateFormatPipe],
  providers:[DateFormatPipe],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent {
  public isLoading: boolean = false;
  public dataClient: Clientes[] = [];
  public isDataRendered: boolean = false;

  constructor(
    private service: ServicoListaService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.isLoading = true;
    this.service.getAllClients().subscribe({
      next: (data) => {
        this.dataClient = data;
        console.log(this.dataClient);
        this.isDataRendered = true;
        if (this.isDataRendered) {
          this.isLoading = false;
        }
      },
      error: (error) => {
        console.error('Error fetching clients:', error);
        this.isLoading = false;
      },
    });
  }

  verDetalle(id: number) {
    this.router.navigate(['/ver', id]);
  }

  deleteClient(id: number) {
    this.service.deleteClientById(id).subscribe({
      next: () => {
        this.toastr.warning('Paciente eliminado exitosamente', 'Estado:');
        this.getClients();  // Actualiza la lista de clientes después de la eliminación exitosa
      },
      error: (error) => {
        console.error('Error deleting client:', error);
        this.toastr.error('Error al eliminar el paciente', 'Error:');
      },
    });
  }
}

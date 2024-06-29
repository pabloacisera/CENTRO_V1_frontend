import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ServicoListaService } from './servico-lista.service';
import { Clientes } from '../clientes';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent {
  public isLoading: boolean = false;
  public dataClient: Clientes[] = [];
  public isDataRendered: boolean = false;

  constructor(private service: ServicoListaService) {}

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
        if(this.isDataRendered){
          this.isLoading = false;
        }
      },
      error: (error) => {
        console.error('Error fetching clients:', error);
        this.isLoading = false;
      },
    });
  }
}

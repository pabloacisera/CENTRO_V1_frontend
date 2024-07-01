import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerDetalleService } from './ver-detalle.service';
import { Clientes } from '../clientes';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../date-format.pipe';

@Component({
  selector: 'app-ver',
  standalone: true,
  imports: [SpinnerComponent, CommonModule, DateFormatPipe],
  providers:[DateFormatPipe],
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  dataById: Clientes | null = null;
  isLoading: boolean = true;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private verDetalle: VerDetalleService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam !== null ? +idParam : 0;
    console.log('Id recibido: ', this.id);
    this.getData(this.id);
  }

  getData(id: number): void {
    this.verDetalle.getDataById(id).subscribe(
      (responseData: Clientes) => {
        this.dataById = responseData;
        this.isLoading = false; // Marca como cargado cuando se reciben los datos
        console.log('Datos recibidos:', this.dataById);
      },
      (error) => {
        console.error('Error al obtener datos por Id:', error);
        this.isLoading = false; // Marca como cargado incluso si hay un error
      }
    );
  }
}

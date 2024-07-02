import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Resultado } from './interface.resultado';
import { ResultadoService } from './resultado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent implements OnInit {
  inputValue: string = '';
  codigoChecked: boolean = false;
  determinacionChecked: boolean = false;
  resultados: Resultado[] = [];
  ubValue: number = 0;
  ubValueFixed: boolean = false;

  constructor(private resService: ResultadoService) {}

  ngOnInit(): void {
    this.search();
  }

  search() {
    if (this.codigoChecked) {
      this.resService.consultarCodigo(this.inputValue).subscribe((response: any) => {
        this.resultados = [...this.resultados, response]; // concatenate the new result with the existing ones
      });
    } else if (this.determinacionChecked) {
      this.resService.consultarDeterminacion(this.inputValue).subscribe((response: any) => {
        this.resultados = [...this.resultados, response]; // concatenate the new result with the existing ones
      });
    }
  }

  fixUbValue() {
    this.ubValueFixed = true;
  }

  modifyUbValue() {
    this.ubValueFixed = false;
  }

  trackByCodigo(index: number, data: Resultado): number {
    return data.codigo;
  }
}
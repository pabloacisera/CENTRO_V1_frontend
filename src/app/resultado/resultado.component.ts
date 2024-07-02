import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Resultado } from './interface.resultado';
import { ResultadoService } from './resultado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
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
    this.loadLocalStorageData();
  }

  search() {
    if (this.codigoChecked) {
      this.resService.consultarCodigo(this.inputValue).subscribe((response: any) => {
        this.resultados = [...this.resultados, response]; // concatenar el nuevo resultado con los existentes
        this.saveToLocalStorage();
      });
    } else if (this.determinacionChecked) {
      this.resService.consultarDeterminacion(this.inputValue).subscribe((response: any) => {
        this.resultados = [...this.resultados, response]; // concatenar el nuevo resultado con los existentes
        this.saveToLocalStorage();
      });
    }
  }

  fixUbValue() {
    this.ubValueFixed = true;
    this.saveToLocalStorage();
  }

  modifyUbValue() {
    this.ubValueFixed = false;
    this.saveToLocalStorage();
  }

  eliminar(codigo: number) {
    this.resultados = this.resultados.filter(data => data.codigo !== codigo);
    this.saveToLocalStorage();
  }

  guardar() {
    // Implementar la lógica para guardar los datos en el backend en el futuro
    console.log('Datos guardados:', this.resultados);
  }

  trackByCodigo(index: number, data: Resultado): number {
    return data.codigo;
  }

  saveToLocalStorage() {
    const dataToSave = {
      resultados: this.resultados,
      ubValue: this.ubValue,
      ubValueFixed: this.ubValueFixed
    };
    localStorage.setItem('resultadosData', JSON.stringify(dataToSave));
  }

  loadLocalStorageData() {
    const savedData = localStorage.getItem('resultadosData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.resultados = parsedData.resultados || [];
      this.ubValue = parsedData.ubValue || 0;
      this.ubValueFixed = parsedData.ubValueFixed || false;
    }
  }
}

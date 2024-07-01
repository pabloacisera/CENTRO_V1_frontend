import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { Nomenclatura } from '../nomenclatura';
import { NomServiceService } from './nom-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-nomenclatura',
  standalone: true,
  imports: [SpinnerComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './nomenclatura.component.html',
  styleUrl: './nomenclatura.component.css'
})
export class NomenclaturaComponent {
  public isLoading: boolean = false;
  nomen: Nomenclatura[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  rowsPerPage: number = 15;
  filteredData: any[] = [];

  constructor(private service: NomServiceService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getNom();
  }

  async getNom() {
    try {
      const data = await firstValueFrom(this.service.getNomenclatura())
      this.nomen = data;
      this.filteredData = data;
      this.isLoading = false;
    } catch (error) {
      console.error(error)
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
  nextPage(): void {
    const totalPages = Math.ceil(this.filteredData.length / this.rowsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    return this.filteredData.slice(startIndex, startIndex + this.rowsPerPage);
  }

  filterData(): void {
    if (!this.searchTerm) {
      this.filteredData = this.nomen;
    } else {
      const searchTermLower = this.searchTerm.toLowerCase();
      this.filteredData = this.nomen.filter((item) => {
        return item.codigo.toString().startsWith(searchTermLower) ||
               item.determinacion.toLowerCase().startsWith(searchTermLower);
      });
    }
  }

  onSearchTermChange(): void {
    this.filterData();
  }
}

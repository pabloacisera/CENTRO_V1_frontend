import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-nomenclatura',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './nomenclatura.component.html',
  styleUrl: './nomenclatura.component.css'
})
export class NomenclaturaComponent {
  public isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}

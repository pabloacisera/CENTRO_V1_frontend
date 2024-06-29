import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-nueva-ficha',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './nueva-ficha.component.html',
  styleUrl: './nueva-ficha.component.css'
})
export class NuevaFichaComponent {
  public isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}

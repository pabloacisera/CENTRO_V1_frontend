import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-turno',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './turno.component.html',
  styleUrl: './turno.component.css'
})
export class TurnoComponent {

  ngOnInit() {}
}

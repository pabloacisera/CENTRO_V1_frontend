import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DateFormatPipe } from './date-format.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ListadoComponent,
    RouterLink,
    SpinnerComponent,
  ],
  providers:[DateFormatPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend-cliente';

  public isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListclientsComponent } from './components/listclients/listclients.component';
import { ViewClientComponent } from './components/view-client/view-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr'; // Si usas standalone components, es posible que necesites mantener esto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    ListclientsComponent,
    ViewClientComponent,
    RouterLink,
    ReactiveFormsModule,
    ToastrModule, // Si usas standalone components, es posible que necesites mantener esto
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend-cliente';
}

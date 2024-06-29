import { Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { TurnoComponent } from './turno/turno.component';
import { NomenclaturaComponent } from './nomenclatura/nomenclatura.component';
import { NuevaFichaComponent } from './nueva-ficha/nueva-ficha.component';
import { SingleLoginComponent } from './single-login/single-login.component';

export const routes: Routes = [
  { path: 'lista', component: ListadoComponent },
  { path: 'registro', component: LoginComponent },
  { path: 'logear', component: SingleLoginComponent },
  { path: 'turno', component: TurnoComponent },
  { path: 'nomenclatura', component: NomenclaturaComponent },
  { path: 'nueva_ficha', component: NuevaFichaComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, // Corregido para redirigir a 'lista'
  { path: '**', redirectTo: '' } // Maneja rutas no coincidentes
];

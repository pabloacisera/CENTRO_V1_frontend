import { Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { TurnoComponent } from './turno/turno.component';
import { NomenclaturaComponent } from './nomenclatura/nomenclatura.component';
import { NuevaFichaComponent } from './nueva-ficha/nueva-ficha.component';
import { SingleLoginComponent } from './single-login/single-login.component';
import { VerComponent } from './ver/ver.component';
import { ActualizarFichaComponent } from './actualizar-ficha/actualizar-ficha.component';
import { ResultadoComponent } from './resultado/resultado.component';

export const routes: Routes = [
  { path: 'lista', component: ListadoComponent },
  { path: 'ver/:id', component: VerComponent},
  { path: 'registro', component: LoginComponent },
  { path: 'logear', component: SingleLoginComponent },
  { path: 'turno', component: TurnoComponent },
  { path: 'nomenclatura', component: NomenclaturaComponent },
  { path: 'nueva_ficha', component: NuevaFichaComponent },
  {path: 'actualizar/:id', component: ActualizarFichaComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: 'resultado/:id', component: ResultadoComponent},
  { path: '', redirectTo: '', pathMatch: 'full' }, // Corregido para redirigir a 'lista'
  { path: '**', redirectTo: '' } // Maneja rutas no coincidentes
];

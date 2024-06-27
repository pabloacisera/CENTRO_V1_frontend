import { Routes } from '@angular/router';
import { ListclientsComponent } from './components/listclients/listclients.component';
import { AddEditClientsComponent } from './components/add-edit-clients/add-edit-clients.component';
import { ViewClientComponent } from './components/view-client/view-client.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

export const routes: Routes = [
  {
    path:"list", component:ListclientsComponent
  },
  {
    path:"add", component:AddEditClientsComponent
  },
  {
    path:"view/:id", component: ViewClientComponent
  },
  {
    path:"edit/:id", component: EditFormComponent
  },
  {
    path:"**", redirectTo:"list", pathMatch:"full"
  }
];

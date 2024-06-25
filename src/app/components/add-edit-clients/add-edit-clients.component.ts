import { Component } from '@angular/core';

@Component({
  selector: 'app-add-edit-clients',
  standalone:true,
  imports:[],
  templateUrl: './add-edit-clients.component.html',
  styleUrls: ['./add-edit-clients.component.css'],
})
export class AddEditClientsComponent {

  constructor() {
    
  }

  CalculateAge(): void {
    const dobInputElement = document.getElementById('dateofbirth') as HTMLInputElement;
    const dobValue = dobInputElement.value;

    if (dobValue) {
      const today = new Date();
      const birthDate = new Date(dobValue);
      let age: number = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
    }
  }

  
  
}
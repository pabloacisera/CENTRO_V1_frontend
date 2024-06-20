import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Clients } from '../../interfaces/clients'

@Component({
  selector: 'app-add-edit-clients',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-edit-clients.component.html',
  styleUrl: './add-edit-clients.component.css'
})

export class AddEditClientsComponent {
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
  
      const ageElement = document.getElementById('age');
      if (ageElement) {
        ageElement.textContent = age.toString();
      }
  
      this.formClient.patchValue({
        age: age
      });
    }
  }
  


  formClient: FormGroup

  constructor(private fb: FormBuilder){
    this.formClient = this.fb.group({
      name:['', Validators.required],
      surname:['', Validators.required],
      socialsecuritynumber:['', Validators.required],
      dateofbirth:['', Validators.required],
      age:[''],
      address:['', Validators.required],
      location:[''],
      phone:[''],
      email:['', Validators.email],
      healthinsurance:[''],
      observation:[''],
      formFile:['']
    })
  }



  addclient(){
    const client: Clients = {
      name: this.formClient.value.name,
      surname: this.formClient.value.surname,
      socialsecuritynumber: this.formClient.value.socialsecuritynumber,
      dateofbirth: this.formClient.value.dateofbirth,
      age:this.formClient.value.age,
      address:this.formClient.value.address,
      location:this.formClient.value.location,
      phone:this.formClient.value.phone,
      email:this.formClient.value.email,
      healthinsurance:this.formClient.value.healthinsurance,
      observation:this.formClient.value.observation,
      formFile:this.formClient.value.formFile,
    }
    console.log(client)
  }
}

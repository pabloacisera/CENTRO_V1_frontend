import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { CommonModule } from '@angular/common';
import { Clients } from '../../interfaces/clients';

@Component({
  selector: 'app-add-edit-clients',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-edit-clients.component.html',
  styleUrls: ['./add-edit-clients.component.css']
})
export class AddEditClientsComponent implements OnInit {
  clientForm: FormGroup;
  selectedFile: File | undefined;


  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      socialSecurityNumber: ['', Validators.required],
      dateOfbirth: ['', Validators.required],
      age: [{ value: '', disabled: true }],
      address: ['', Validators.required],
      location: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      healthInsurance: ['', Validators.required],
      observation: [''],
      turno: [''],
    });
  }

  ngOnInit(): void {}

  onDateChange(event: any): void {
    const birthDate = new Date(event.target.value);
    this.clientForm.patchValue({ age: this.calculateAge(birthDate).toString() });
  }

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  async onSubmit() {
    if (this.clientForm.valid) {
      try {
        const formData = this.clientForm.getRawValue();
        console.log('data: ', formData);

        if (this.selectedFile) {
          formData.formFile = this.selectedFile;
        }

        const res = await this.clientService.createClient(formData);
        console.log('Cliente creado exitosamente', res.data);
        return res.data;
      } catch (error) {
        console.error('Error al crear el cliente', error);
      }
    } else {
      console.error('Formulario inválido. Revise los campos.');
    }
  }

  
}

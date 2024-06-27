import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Clients } from '../../interfaces/clients';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent implements OnInit {
  clientForm: FormGroup;
  dataEdit: Clients = {} as Clients;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private toastr: ToastrService,
    private adRoute: ActivatedRoute,
  ) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      socialsecuritynumber: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      age: [{ value: '', disabled: true }],
      address: ['', Validators.required],
      location: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      healthinsurance: ['', Validators.required],
      observation: [''],
      turno: [''],
    });
  }

  ngOnInit(): void {
    const idParam = this.adRoute.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const editById = Number(idParam);
      console.log('ID:', editById);
      this.loadClientData(editById);
    } else {
      console.error('No se encontró el parámetro ID en la ruta');
    }
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

  onDateChange(event: any): void {
    const birthDate = new Date(event.target.value);
    this.clientForm.patchValue({
      age: this.calculateAge(birthDate).toString(),
    });
  }

  async loadClientData(id: number) {
    this.isLoading = true;
    try {
      const res = await this.clientService.getClientById(id);
      this.dataEdit = res.data;
      console.log('Cliente obtenido por ID:', res.data);

      this.clientForm.patchValue({
        name: this.dataEdit.name,
        surname: this.dataEdit.surname,
        socialsecuritynumber: this.dataEdit.socialsecuritynumber,
        dateofbirth: this.dataEdit.dateofbirth,
        age: this.calculateAge(new Date(this.dataEdit.dateofbirth)),
        address: this.dataEdit.address,
        location: this.dataEdit.location,
        phone: this.dataEdit.phone,
        email: this.dataEdit.email,
        healthinsurance: this.dataEdit.healthinsurance,
        observation: this.dataEdit.observation,
        turno: this.dataEdit.turno,
      });
      this.isLoading= false;
    } catch (error) {
      console.error('Error al obtener el cliente por ID', error);
    }
  }

  async updateClient() {
    if (this.clientForm.valid) {
      try {
        const updatedClient = this.clientForm.getRawValue();
        const idParam = this.adRoute.snapshot.paramMap.get('id');
        const editById = Number(idParam);
  
        // Convertir 'age' a string si es un número
        updatedClient.age = updatedClient.age.toString();
  
        await this.clientService.updateClient(editById, updatedClient);
        this.toastr.success('Cliente actualizado exitosamente');
        this.router.navigate(['/view']);
      } catch (error) {
        console.error('Error al actualizar el cliente', error);
        this.toastr.error('Error al actualizar el cliente');
      }
    }
  }
  
  
}
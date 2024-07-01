import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VerDetalleService } from '../ver/ver-detalle.service';  // Importa el servicio correcto
import { Clientes } from '../clientes';
import { ActualizarFicha } from './actualizar.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  standalone: true,
  selector: 'app-actualizar-ficha',
  imports: [SpinnerComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './actualizar-ficha.component.html',
  styleUrls: ['./actualizar-ficha.component.css']
})
export class ActualizarFichaComponent implements OnInit {
  public isLoading: boolean = false;
  public formulario: FormGroup;
  private clientId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ActualizarFicha: ActualizarFicha,
    private ServicioExterno: VerDetalleService,  // Usa el servicio correcto aquí
    private toastr: ToastrService
  ) {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      socialsecuritynumber: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      healthinsurance: [''],
      address: ['', Validators.required],
      location: ['', Validators.required],
      observation: [''],
      turno: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = +params['id'];
      this.loadClientData();
    });
  }

  loadClientData() {
    this.isLoading = true;
    this.ServicioExterno.getDataById(this.clientId).subscribe({
      next: (data: Clientes) => {
        this.formulario.patchValue(data);
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error loading client data:', error);
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.isLoading = true;
      this.ActualizarFicha.updateClient(this.clientId, this.formulario.value).subscribe({
        next: (data: Clientes) => {
          this.toastr.success('Datos actualizados exitosamente', 'Estado:');
          this.router.navigate(['/listado']);
          this.isLoading = false;
        },
        error: (error: any) => {
          console.error('Error updating client data:', error);
          this.toastr.error('Error al actualizar los datos', 'Error:');
          this.isLoading = false;
        }
      });
    }
  }
  onDateOfBirthInput(dateString: string) {
    const birthDate = new Date(dateString);
    const age = this.calculateAge(birthDate);
    this.formulario?.get('age')?.setValue(age);
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}

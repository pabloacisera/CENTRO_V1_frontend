import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { ServicioPostService } from './servicio-post.service';


@Component({
  selector: 'app-nueva-ficha',
  standalone: true,
  imports: [SpinnerComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './nueva-ficha.component.html',
  styleUrl: './nueva-ficha.component.css'
})
export class NuevaFichaComponent implements OnInit{
  formulario: FormGroup = new FormGroup({});
  public isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder,private servicio: ServicioPostService) {}

  ngOnInit(): void {
   this.formulario = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    socialsecuritynumber:['', Validators.required],
    dateofbirth: ['', Validators.required],
    age: ['', Validators.required],
    address:['', Validators.required],
    location:['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    healthinsurance: ['', Validators.required],
    observation:[''],
    turno: ['']
   }) 
  }

  async onSubmit(){
    console.log(this.formulario.value);
    this.isLoading = true;
    try {
      const formData = { ...this.formulario.value }; // create a copy of the form data
      formData.dateofbirth = new Date(formData.dateofbirth); // convert date of birth to Date object
      formData.age = formData.age.toString(); // convert age to string
      formData.turno = formData.turno.toString();
      const res = await this.servicio.crearFicha(formData);
      console.log(res);
      this.isLoading = false;
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
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

  onDateOfBirthInput(dateString: string) {
    const birthDate = new Date(dateString);
    const age = this.calculateAge(birthDate);
    this.formulario?.get('age')?.setValue(age);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Clients } from '../../interfaces/clients';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-listclients',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listclients.component.html',
  styleUrl: './listclients.component.css',
})
export class ListclientsComponent implements OnInit {
  clients: Clients[] = [
    {
      id: 1124,
      name: 'javier',
      surname: 'milei',
      socialsecuritynumber: '28754123',
      dateofbirth: '11/03/1988/',
      age: 37,
      address: 'calle 57 nº 2034',
      location: 'reconquista',
      phone: '3482271352',
      email: 'javo@milei.com',
      healthinsurance: 'Pami',
      observation: 'any',
      formFile: new File([], 'emptyText')
    },
    {
      id: 1125,
      name: 'karina',
      surname: 'milei',
      socialsecuritynumber: '28754123',
      dateofbirth: '11/03/1988/',
      age: 37,
      address: 'calle 57 nº 2034',
      location: 'reconquista',
      phone: '34822712145',
      email: 'kari@milei.com',
      healthinsurance: 'Pami',
      observation: 'any',
      formFile: new File([], 'emptyText')
    },
  ];

  ngOnInit(): void {
    
  }
}

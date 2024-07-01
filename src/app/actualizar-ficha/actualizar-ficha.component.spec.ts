import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFichaComponent } from './actualizar-ficha.component';

describe('ActualizarFichaComponent', () => {
  let component: ActualizarFichaComponent;
  let fixture: ComponentFixture<ActualizarFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarFichaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

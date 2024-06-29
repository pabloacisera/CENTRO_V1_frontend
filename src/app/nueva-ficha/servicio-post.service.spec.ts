import { TestBed } from '@angular/core/testing';

import { ServicioPostService } from './servicio-post.service';

describe('ServicioPostService', () => {
  let service: ServicioPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

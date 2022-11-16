import { TestBed } from '@angular/core/testing';

import { ArrendadorService } from './arrendador.service';

describe('ArrendadorService', () => {
  let service: ArrendadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrendadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

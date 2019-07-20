import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActionsService } from './actions.service';

describe('ActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionsService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([ActionsService], (service: ActionsService) => {
    expect(service).toBeTruthy();
  }));
});

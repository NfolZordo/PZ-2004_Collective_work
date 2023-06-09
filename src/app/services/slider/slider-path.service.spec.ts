import { TestBed } from '@angular/core/testing';

import { SliderPathService } from './slider-path.service';

describe('SliderPathService', () => {
  let service: SliderPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

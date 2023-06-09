import { TestBed } from '@angular/core/testing';

import { MusicPathService } from './music-path.service';

describe('MusicPathService', () => {
  let service: MusicPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

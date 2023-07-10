import { TestBed } from '@angular/core/testing';

import { VotingDbService } from './voting-db.service';

describe('VotingDbService', () => {
  let service: VotingDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

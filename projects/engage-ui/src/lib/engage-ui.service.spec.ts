import { TestBed } from '@angular/core/testing';

import { EngageUiService } from './engage-ui.service';

describe('EngageUiService', () => {
  let service: EngageUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngageUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

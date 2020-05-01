import { TestBed } from '@angular/core/testing';

import { HrmReportService } from './hrm-report.service';

describe('HrmReportService', () => {
  let service: HrmReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrmReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { defaultProfile , contacts }  from '../data/data'

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('Service should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Default value should return value', () => {
    expect(service.defaultProfile).toBe(defaultProfile);
  });
  it('#backup contact observable should return value from observable',
    (done: DoneFn) => {
    service.contactsBackupObservable.subscribe(value => {
      expect(value).toBe(contacts);
      done();
    });
  });

});

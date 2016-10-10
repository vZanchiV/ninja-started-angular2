import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class FakeRaceService {

  constructor(private apiService: ApiService) {
  }

  list() {
    return [{ name: 'London' }, { name: 'Lyon' }];
  }

}



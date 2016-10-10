import { Component } from '@angular/core';
import { RacesComponent } from './races.component';
import { PoniesComponent } from './ponies.component';
import { RaceService } from './services/race.service';
import { FakeRaceService } from './services/fakeRace.service';
import { ApiService } from './services/api.service';



@Component({
  moduleId: module.id,
  selector: 'ponyracer-app',
  templateUrl: 'ponyracer.component.html',
  styleUrls: ['ponyracer.component.css'],
  directives: [RacesComponent,PoniesComponent],
  providers: [
    { provide: RaceService, useClass: FakeRaceService },
    ApiService
  ],

})
export class PonyracerAppComponent {

  title = 'ponyracer works!';

  // add a constructor with RaceService
  constructor(private raceService: RaceService) {
  }

  list() {
    return this.raceService.list();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'ns-ponies',
  template: `<button (click)="refreshPonies()">Refresh</button>
  <ul>
    <li *ngFor="let pony of ponies; let isEven=even"
      [style.color]="isEven ? 'green' : 'blue'">
      {{pony.name}}
    </li>
  </ul>`
})

export class PoniesComponent {

  ponies: Array<any> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];

  refreshPonies() {
    this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
  }
}

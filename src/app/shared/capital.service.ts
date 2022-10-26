import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ICapital } from './capital.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {
  public capital$ : BehaviorSubject<ICapital[] | []> = new BehaviorSubject<ICapital[] | []>([
    { 
      pays: 'France',
      ville: 'Paris',
      population: '2165423',
      latitude: 48.856613,
      longitude: 2.352222
      },
      { 
      pays: 'Espagne',
      ville: 'Madrid',
      population: '3305408',
      latitude: 40.416775,
      longitude: -3.703790
      },
      { 
      pays: 'Royaume-Uni',
      ville: 'Londre',
      population: '8908081',
      latitude: 51.507359,
      longitude: -0.136439
      },
      { 
      pays: 'Etat-Unis',
      ville: 'Washington DC',
      population: '701974',
      latitude: 38.907192,
      longitude: -77.036873
      },
      { 
      pays: 'Japon',
      ville: 'Tokyo',
      population: '13960000',
      latitude: 35.689487,
      longitude: 139.691711
      },
  ]);

  public getCapital(index: number) {
    return this.capital$.value[index];
  }

  constructor() { }
}

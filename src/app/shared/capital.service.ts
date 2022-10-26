import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

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
    
  };

 public addCapital(capital: ICapital) {
  const value = this.capital$.value;
  this.capital$.next([...value, capital]);
 }

 public editCapital(editedCapital: ICapital) {
  const value = this.capital$.value;
  this.capital$.next(
    value.map((capital: ICapital) => {
      if(capital.pays === editedCapital.pays) {
        return editedCapital;
      
      } else {
        return capital;
      }
    })
  )
}
public deleteCapital(index: number) {
  let value = this.capital$.value;
  const capitalIndex = value[index]
 
  if(capitalIndex !== null) {
   const newCapital =  value.splice(index, 1)
   console.log(value);
   console.log(newCapital);
   
   return this.capital$.next([...value]);
  } else {
    value
  }
    
}

getLocation(capitals: ICapital[]) {
  capitals = this.capital$.value
  console.log(capitals)
  capitals.map((capitalInfo: ICapital) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((capital: GeolocationPosition) => {
        const latitude = capitalInfo.latitude
        const longitude = capitalInfo.longitude
        let location = {}
        location = capital.coords.latitude
        resolve({lat:  location , lng: capital = longitude!})
        
      })
    })
    
    
  })
  
  
}

// getLocationService() : Promise<any> {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(response => {
//      let test = 15
//       resolve({lat: test, lng : response.coords.longitude})
//     })
//   })
// }

  constructor() { }
}

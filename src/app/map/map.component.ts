import { getLocaleCurrencyCode } from '@angular/common';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ICapital } from '../shared/capital.interface';
import { CapitalService } from '../shared/capital.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnInit {
  capitals: ICapital[] = this.capitalService.capital$.value;
  

  private initMap(capitals: ICapital[]): void {
    navigator.geolocation.getCurrentPosition(function (position) {
       const map = L.map('my-map', {
        center: [position.coords.latitude, position.coords.longitude],
        zoom: 3,
      });

      const tiles = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          minZoom: 1,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      );
      tiles.addTo(map);

      L.marker([position.coords.latitude, position.coords.longitude])
        .addTo(map)
        .bindPopup('My position');
    });

    capitals.map((capitalInfo) => {
      navigator.geolocation.getCurrentPosition(
        (capital: GeolocationPosition) => {
          let location = [];
          for (const capital of capitals) {
            location.push({
              latitude: capital.latitude,
              longitude: capital.longitude,
            });
          }
          let latitude: any = [];
          let longitude: any = [];
          for (const item of location) {
           const markers= L.marker([item.latitude, item.longitude])
           console.log(markers)
          }

          
        }
      );
    });
    
  }
  // getMarker(capitals: ICapital[]) {
  //   capitals.map((capitalInfo) => {
  //     navigator.geolocation.getCurrentPosition(
  //       (capital: GeolocationPosition) => {
  //         let location = [];
  //         for (const capital of capitals) {
  //           location.push({
  //             latitude: capital.latitude,
  //             longitude: capital.longitude,
  //           });
  //         }
  //         let latitude: any = [];
  //         let longitude: any = [];
  //         for (const item of location) {
  //           latitude.push(item.latitude);
  //           longitude.push(item.longitude);
  //         }

  //         // console.log(latitude, longitude)
    
  //       }
  //     );
  //   });
  // }

  constructor(private capitalService: CapitalService) {}
  ngOnInit(): void {
    
    // this.getMarker(this.capitals);
    // this.capitalService.getLocation(this.capitals)
  }

  ngAfterViewInit(): void {
    this.initMap(this.capitals);
  }
}

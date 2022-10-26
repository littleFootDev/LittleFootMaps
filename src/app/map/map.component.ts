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


  private initMap(): void {
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
  }
  getMarker(capitals: ICapital[]) {
    capitals = this.capitalService.capital$.value;
  
    const markers = capitals.map((capital: ICapital) => {
      const latitude = capital.latitude;
      const longitude = capital.longitude;
      const coords = [ latitude, longitude ];
      // console.log(coords)
      return coords;
    });
    
    
  }
  

  constructor(private capitalService: CapitalService) {}
  ngOnInit(): void {
    this.getMarker(this.capitals);
    console.log(this.capitalService.getLocation(this.capitals))
  }
  
  ngAfterViewInit(): void {
    this.initMap();
  }
}

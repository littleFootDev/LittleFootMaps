import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  

  private initMap(): void {
    navigator.geolocation.getCurrentPosition(function(position) {
      const map = L.map('my-map', {
        center: [position.coords.latitude, position.coords.longitude],
        zoom:3
      });

      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
      tiles.addTo(map)

      L.marker([position.coords.latitude, position.coords.longitude])
        .addTo(map)
        .bindPopup('My position')
        
    })



    
  }
  ngAfterViewInit(): void {
    this.initMap()
  }
}

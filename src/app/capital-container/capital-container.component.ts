import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ICapital } from '../shared/capital.interface';
import { CapitalService } from '../shared/capital.service';

@Component({
  selector: 'app-capital-container',
  templateUrl: './capital-container.component.html',
  styleUrls: ['./capital-container.component.scss']
})
export class CapitalContainerComponent implements OnInit {
  
  public capitals: ICapital[] = [];

  constructor(private capitalService: CapitalService) { }

  ngOnInit(): void {
    this.capitalService.capital$.subscribe((capitals: ICapital[]) => {
      this.capitals = capitals
    })
  }

  
}

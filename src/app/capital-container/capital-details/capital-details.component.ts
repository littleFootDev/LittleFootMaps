import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


import { ICapital } from 'src/app/shared/capital.interface';
import { CapitalService } from 'src/app/shared/capital.service';

@Component({
  selector: 'app-capital-details',
  templateUrl: './capital-details.component.html',
  styleUrls: ['./capital-details.component.scss']
})
export class CapitalDetailsComponent implements OnInit {
  public capital!: ICapital;
  

  constructor(
    private capitalService: CapitalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const capitalIndex = paramMap.get('index')!
      this.capital =  this.capitalService.getCapital(+capitalIndex)
    })
  }

  onDelete(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const capitalIndex = paramMap.get('index')!
      this.capitalService.deleteCapital(+capitalIndex)
    })
    
  }

}

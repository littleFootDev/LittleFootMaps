import { Component, Input, OnInit,} from '@angular/core';

import { ICapital } from 'src/app/shared/capital.interface';


@Component({
  selector: 'app-capital-list',
  templateUrl: './capital-list.component.html',
  styleUrls: ['./capital-list.component.scss']
})
export class CapitalListComponent implements OnInit {
  @Input() public capitals: ICapital[] | null = null;
 

  constructor() { }

  ngOnInit(): void {
  }
  
}

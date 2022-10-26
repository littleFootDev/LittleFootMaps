import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ICapital } from '../../shared/capital.interface';
import { CapitalService} from '../../shared/capital.service';
@Component({
  selector: 'app-capital-form',
  templateUrl: './capital-form.component.html',
  styleUrls: ['./capital-form.component.scss']
})
export class CapitalFormComponent implements OnInit {
  public capital?: ICapital;
  public capitalForm: FormGroup = this.initForm();


  constructor(
    private capitalService: CapitalService ,
    private fb: FormBuilder, 
    private activatedRoute : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index')!;
      if(index !== null) {
        this.capital = this.capitalService.getCapital(+index);
      }
      this.initForm(this.capital)
    })


  }

  private initForm(capital: ICapital = {pays: '', ville: '', population: ''}): FormGroup {
    return this.capitalForm = this.fb.group({
      pays: [capital.pays, Validators.required],
      ville: [capital.ville, Validators.required],
      population: [capital.population, Validators.required],
      latitude: [capital.latitude, Validators.required],
      longitude: [capital.longitude, Validators.required],
    })
  }

  public onSaveCapital(): void {
    if(this.capital) {
      this.capitalService.editCapital(this.capitalForm.value);
    } else {
      this.capitalService.addCapital(this.capitalForm.value);
    };
    this.router.navigate(['..'], {relativeTo: this.activatedRoute})
  }

}

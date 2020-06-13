import { PlateService } from './../../services/plate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.css']
})
export class PlatesComponent implements OnInit {

  public page = 1;
  pageSize = 10;

  platesList: any;
  constructor(private _plateService: PlateService) { 
    this.platesList = []
  }

  ngOnInit(){
  }

}

import { Component, OnInit } from '@angular/core';
import { PlateService } from 'src/app/services/plate.service';

@Component({
  selector: 'app-plates-category',
  templateUrl: './plates-category.component.html',
  styleUrls: ['./plates-category.component.css']
})
export class PlatesCategoryComponent implements OnInit {

  public page = 1;
  pageSize = 10;

  platesList: any;
  constructor(private _plateService: PlateService) { 
    this.platesList = []
  }

  ngOnInit(){
    this._plateService.getPlatesCategoryList()
      .subscribe(
        res => this.platesList = res.data,
        err => console.log(err)
    )
  }
}

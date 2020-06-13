import { Component, OnInit } from '@angular/core';
import { PlateService } from 'src/app/services/plate.service';

@Component({
  selector: 'app-plates-category-create',
  templateUrl: './plates-category-create.component.html',
  styleUrls: ['./plates-category-create.component.css']
})
export class PlatesCategoryCreateComponent implements OnInit {
  Plates = {
    name: '',
    description: '',
    category_image: '',
    published: false
  };
  submitted = false;

  constructor(private _plateService: PlateService) { }

  ngOnInit(): void {
  }

  createPlateCategory(){
    const data = {
      name: this.Plates.name,
      description: this.Plates.description,
      category_image: this.Plates.category_image
    };

    this._plateService.createPlateCategory(data)
    .subscribe(
      response =>{
        console.log(response);
        this.submitted = true;
      },
      error =>{
        console.log(error);
      }
    );
  }

  newPlatesCategory(){
    this.submitted = false;
    this.Plates = {
      name: '',
      description: '',
      category_image: '',
      published: false
    };
  }

}

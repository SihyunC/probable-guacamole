import { Component, OnInit } from '@angular/core';
import { PlateService } from 'src/app/services/plate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plates-details',
  templateUrl: './plates-details.component.html',
  styleUrls: ['./plates-details.component.css']
})
export class PlatesDetailsComponent implements OnInit {

  currentPlate = null;
  message = '';

  constructor(private _plateService: PlateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getPlate(this.route.snapshot.paramMap.get('id'));
  }

  getPlate(id){
    this._plateService.getPlatesCategory(id)
    .subscribe(
      data => {
        this.currentPlate = data.category;
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    );
  }

  editPublished(status){
    const data ={
      name: this.currentPlate.name,
      description: this.currentPlate.description,
      published: status
    };

    this._plateService.editPlateCategory(this.currentPlate.id, data)
    .subscribe(
      response =>{
        this.currentPlate.published = status;
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    );
  }

  editPlateCategory(){
    this._plateService.editPlateCategory(this.currentPlate.id, this.currentPlate)
    .subscribe(
      response =>{
        console.log(response);
        this.message = "the plate category was updated successfully!";
      },
      error =>{
        console.log(error);
      }
    );
  }

}

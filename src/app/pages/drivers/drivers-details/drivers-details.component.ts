import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drivers-details',
  templateUrl: './drivers-details.component.html',
  styleUrls: ['./drivers-details.component.css']
})
export class DriversDetailsComponent implements OnInit {

  currentDriver = null;
  message = '';

  constructor(private _driversService: DriversService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getDriver(this.route.snapshot.paramMap.get('id'));
  }

  getDriver(id){
    this._driversService.getDriverDetails(id)
    .subscribe(
      data => {
        this.currentDriver = data[0];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }


}

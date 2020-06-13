import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drivers-docs-details',
  templateUrl: './drivers-docs-details.component.html',
  styleUrls: ['./drivers-docs-details.component.css']
})
export class DriversDocsDetailsComponent implements OnInit {

  currentDriver = null;
  message = '';

  constructor(private _driversService: DriversService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getDriverDocs(this.route.snapshot.paramMap.get('id'));
  }

  getDriverDocs(id){
    this._driversService.getDriverDocsDetails(id)
    .subscribe(
      res => {
        this.currentDriver = res.data[0];
        console.log(res);
      },
      error => {
        console.log(error);
      });
  }

}

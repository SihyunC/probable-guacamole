import { Component, OnInit } from '@angular/core';
import { ChefsService } from 'src/app/services/chefs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chefs-details',
  templateUrl: './chefs-details.component.html',
  styleUrls: ['./chefs-details.component.css']
})
export class ChefsDetailsComponent implements OnInit {

  currentChef = null;
  message = '';
  
  constructor(private _chefService: ChefsService,
    private route: ActivatedRoute,
    private router: Router) {
   }

  ngOnInit(): void {
    this.message = '';
    this.getChef(this.route.snapshot.paramMap.get('id'));
  }

  getChef(id){
    this._chefService.getChefDetails(id)
    .subscribe(
      data => {
        this.currentChef = data[0];
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
}

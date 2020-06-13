import { Component, OnInit } from '@angular/core';
import { ChefsService } from 'src/app/services/chefs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chefs-docs-details',
  templateUrl: './chefs-docs-details.component.html',
  styleUrls: ['./chefs-docs-details.component.css']
})
export class ChefsDocsDetailsComponent implements OnInit {
  
  currentChef = null;
  message = '';

  constructor(private _chefService: ChefsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getChefDocs(this.route.snapshot.paramMap.get('id'));

  }

  getChefDocs(id){
    this._chefService.getChefDocsDetails(id)
    .subscribe(
      res => {
        this.currentChef = res.data[0];
        console.log(res);
      },
      error => {
        console.log(error);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  currentUser = null;
  message = '';

  constructor(private _usersService: UsersService,
    private route: ActivatedRoute) {
     }

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id){
    this._usersService.getUserDetails(id)
    .subscribe(
      data => {
        this.currentUser = data[0];
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  public page = 1;
  pageSize = 10;
  transactionsList: any;
  math = Math;
  constructor(private _transactionsService : TransactionsService) {
    this.transactionsList = []
   }

  ngOnInit(): void {
    this._transactionsService.getTransactionsList()
    .subscribe(
      res => this.transactionsList = res,
      err => console.log(err)
    )
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private _transactionsUrl = "https://mycheffy.herokuapp.com/manage/orderPayments"

  constructor(private http: HttpClient) {
   }

  getTransactionsList() {
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.get<any>(this._transactionsUrl, {headers:header});
  }
}

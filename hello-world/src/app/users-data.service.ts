import { getLocaleDateFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { idText } from 'typescript';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor(private http: HttpClient) {}
  getData() {
    let url = 'http://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);
  }
}

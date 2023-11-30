import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User
{
  name: string;
  email: string;
  cellno: number;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  names: string[] = [];
  constructor(private httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get('https://userdetail-7932e-default-rtdb.firebaseio.com/users.json');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private httpClient: HttpClient) { }

  addUser(formValue:any) {
    return this.httpClient.post('https://userdetail-7932e-default-rtdb.firebaseio.com/users.json',
    formValue.value
    );
   }
}

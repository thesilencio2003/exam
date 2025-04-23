import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';
import { BaseHttpServiceService } from './base-http.service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseHttpServiceService {

  

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser(id:string): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }
}

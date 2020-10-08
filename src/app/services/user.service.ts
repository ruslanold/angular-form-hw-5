import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "user"

  constructor(private httpClient: HttpClient) { }
  
  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.serverUrl}${this.url}`);
  }
}

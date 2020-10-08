import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';
import { Post } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'user-questions?args[0]='

  constructor(private httpClient: HttpClient) { }

  getAllPostsByID(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.serverUrl}${this.url}${id}`)
  }
}

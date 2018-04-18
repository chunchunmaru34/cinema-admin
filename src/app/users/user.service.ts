import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { stringify } from 'qs';
import { USERS_URL } from '../../constants/api-endpoints';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(USERS_URL);
  }

  getUsersBy(params): Observable<User[]> {
    Object.keys(params).forEach((key) => {
      if (!params[key]) {
        delete params[key];
      }
    });
    const query = stringify(params);

    return this.http.get<User[]>(`${USERS_URL}?${query}`);
  }

  getUserById(id): Observable<User> {
    return this.http.get<User>(`${USERS_URL}/${id}`);
  }

  updateUser(id, user: User): Observable<User> {
    return this.http.put<User>(`${USERS_URL}/${id}`, user);
  }

  deleteUser(id): Observable<User> {
    return this.http.delete<User>(`${USERS_URL}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Addition } from './addition';
import { ADDITIONS_URL } from '../../constants/api-endpoints';

@Injectable()
export class AdditionsService {
  constructor(private http: HttpClient) { }

  getAdditions(): Observable<Addition[]> {
    return this.http.get<Addition[]>(ADDITIONS_URL);
  }

  getAdditionById(id): Observable<Addition> {
    return this.http.get<Addition>(`${ADDITIONS_URL}/${id}`);
  }

  updateAddition(id, movieSession): Observable<Addition> {
    return this.http.put<Addition>(`${ADDITIONS_URL}/${id}`, movieSession);
  }

  deleteAddition(id): Observable<Addition> {
    return this.http.delete<Addition>(`${ADDITIONS_URL}/${id}`);
  }

  createAddition(addition: Addition) {
    return this.http.post<Addition>(ADDITIONS_URL, addition);
  }


}

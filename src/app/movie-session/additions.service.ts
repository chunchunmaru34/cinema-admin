import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Addition} from './addition';

@Injectable()
export class AdditionsService {
  private additionsUrl = 'http://localhost:3003/additional-services';

  constructor(private http: HttpClient) { }

  getAdditions(): Observable<Addition[]> {
    return this.http.get<Addition[]>(this.additionsUrl);
  }

  getAdditionById(id): Observable<Addition> {
    return this.http.get<Addition>(`${this.additionsUrl}/${id}`);
  }

  updateAddition(id, movieSession): Observable<Addition> {
    return this.http.put<Addition>(`${this.additionsUrl}/${id}`, movieSession);
  }

  deleteAddition(id): Observable<Addition> {
    return this.http.delete<Addition>(`${this.additionsUrl}/${id}`);
  }

  createAddition(addition: Addition) {
    return this.http.post<Addition>(this.additionsUrl, addition);
  }


}

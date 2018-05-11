import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { stringify } from 'qs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

abstract class Service<T> {
  URL: string;
  protected http: HttpClient;

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.URL}/${id}`);
  }
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.URL);
  }

  getAllBy(params): Observable<T[]> {
    Object.keys(params).forEach((key) => {
      if (!params[key]) {
        delete params[key];
      }
    });
    const query = stringify(params);

    return this.http.get<T[]>(`${this.URL}?${query}`);
  }

  create(t: T): Observable<T> {
    return this.http.post<T>(this.URL, t, httpOptions);
  }

  update(id: string, t: T): Observable<T> {
    return this.http.put<T>(`${this.URL}/${id}`, t, httpOptions);
  }

  deleteOne(id: string): Observable<T> {
    return this.http.delete<T>(`${this.URL}/${id}`);
  }
}

export default Service;

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Establishment } from 'src/app/models';
import { Observable } from 'rxjs';
import { endpoints } from 'src/app/constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  API_URL = `http://localhost:8080/${endpoints.ESTABLISHMENTS}/`;

  getEstablishments(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.API_URL);
  }

  getEstablishmentsById(id: string): Observable<Establishment> {
    return this.http.get<Establishment>(`${this.API_URL}${id}`);
  }

  addEstablishment(
    establishment: Establishment
  ): Observable<Establishment | any> {
    return this.http.post<Establishment | any>(
      this.API_URL,
      establishment,
      httpOptions
    );
  }

  updateEstablishment(
    data: Partial<Establishment>,
    id: string
  ): Observable<Establishment | { error: string }> {
    return this.http.patch<Establishment | { error: string }>(
      `${this.API_URL}${id}`,
      data,
      httpOptions
    );
  }

  deleteEstablishment(
    id: string
  ): Observable<{ message: string } | { error: string }> {
    return this.http.delete<{ message: string } | { error: string }>(
      `${this.API_URL}${id}`,
      httpOptions
    );
  }

  constructor(private http: HttpClient) {}
}

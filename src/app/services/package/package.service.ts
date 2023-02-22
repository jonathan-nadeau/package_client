import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from 'src/app/models';
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
export class PackageService {
  API_URL = `http://localhost:8080/${endpoints.PACKAGES}/`;

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(this.API_URL);
  }

  getPackageById(id: string): Observable<Package> {
    return this.http.get<Package>(`${this.API_URL}${id}`);
  }

  addPackage(_package: Package): Observable<Package | any> {
    return this.http.post<Package | any>(this.API_URL, _package, httpOptions);
  }

  updatePackage(
    data: Partial<Package>,
    id: string
  ): Observable<Package | { error: string }> {
    return this.http.patch<Package | { error: string }>(
      `${this.API_URL}${id}`,
      data,
      httpOptions
    );
  }

  deletePackage(
    id: string
  ): Observable<{ message: string } | { error: string }> {
    return this.http.delete<{ message: string } | { error: string }>(
      `${this.API_URL}${id}`,
      httpOptions
    );
  }

  constructor(private http: HttpClient) {}
}

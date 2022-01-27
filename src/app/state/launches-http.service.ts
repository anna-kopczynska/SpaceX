import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpQueryModel } from '../launches/models/http-query.model';
import { ResponseModel } from '../launches/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class LaunchesHttpService {
  url = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  searchLaunches(query: HttpQueryModel): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${this.url}launches/query`, query);
  }
}

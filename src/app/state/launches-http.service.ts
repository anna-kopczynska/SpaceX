import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpQueryModel } from '../shared/models/http-query.model';
import { LaunchpadModel } from '../shared/models/launchpad.model';
import { LaunchModel } from '../shared/models/launch.model';
import { ResponseModel } from '../shared/models/response.model';
import { RocketModel } from '../shared/models/rocket.model';

@Injectable({
  providedIn: 'root',
})
export class LaunchesHttpService {
  url = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  searchLaunches(query: HttpQueryModel): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${this.url}launches/query`, query);
  }

  getLounch(lounchId: string): Observable<LaunchModel> {
    return this.http.get<LaunchModel>(`${this.url}launches/${lounchId}`);
  }

  getRocket(rocketId: string): Observable<RocketModel> {
    return this.http.get<RocketModel>(`${this.url}rockets/${rocketId}`);
  }

  getLaunchpad(launchpadId: string): Observable<LaunchpadModel> {
    return this.http.get<LaunchpadModel>(
      `${this.url}launchpads/${launchpadId}`
    );
  }
}

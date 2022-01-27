import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, concatMap, EMPTY, Observable } from 'rxjs';
import { HttpQueryModel } from '../shared/models/http-query.model';
import { ResponseModel } from '../shared/models/response.model';
import { LaunchesHttpService } from './launches-http.service';

interface LaunchesState {
  launchesInfo: ResponseModel | null;
  error: string;
}

const defaultState: LaunchesState = {
  launchesInfo: null,
  error: '',
};

@Injectable({
  providedIn: 'root',
})
export class LaunchesStoreService extends ComponentStore<LaunchesState> {
  readonly launches$: Observable<ResponseModel | null> = this.select(
    (state) => state.launchesInfo
  );

  constructor(private readonly launchHttpService: LaunchesHttpService) {
    super(defaultState);
  }

  readonly updateError = this.updater((state: LaunchesState, error: string) => {
    return {
      ...state,
      error,
    };
  });

  private readonly updateLaunches = this.updater(
    (state: LaunchesState, launches: ResponseModel) => {
      return {
        ...state,
        error: '',
        launchesInfo: launches,
      };
    }
  );

  readonly getLaunches = this.effect((query$: Observable<HttpQueryModel>) => {
    return query$.pipe(
      concatMap((query: HttpQueryModel) => {
        return this.launchHttpService.searchLaunches(query).pipe(
          tapResponse(
            (launches) => {
              this.updateLaunches(launches);
            },
            (e: string) => this.updateError(e)
          ),

          catchError(() => EMPTY)
        );
      })
    );
  });
}

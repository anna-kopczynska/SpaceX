import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, concatMap, EMPTY, Observable } from 'rxjs';
import { HttpQueryModel } from '../shared/models/http-query.model';
import { LaunchpadModel } from '../shared/models/launchpad.model';
import { LaunchModel } from '../shared/models/launch.model';
import { ResponseModel } from '../shared/models/response.model';
import { RocketModel } from '../shared/models/rocket.model';
import { LaunchesHttpService } from './launches-http.service';

interface LaunchesState {
  launchesInfo: ResponseModel | null;
  launch: LaunchModel | null;
  rocket: RocketModel | null;
  launchpad: LaunchpadModel | null;
  error: string;
}

const defaultState: LaunchesState = {
  launchesInfo: null,
  launch: null,
  rocket: null,
  launchpad: null,
  error: '',
};

@Injectable({
  providedIn: 'root',
})
export class LaunchesStoreService extends ComponentStore<LaunchesState> {
  readonly launches$: Observable<ResponseModel | null> = this.select(
    (state) => state.launchesInfo
  );

  readonly launch$: Observable<LaunchModel | null> = this.select(
    (state) => state.launch
  );

  readonly rocket$: Observable<RocketModel | null> = this.select(
    (state) => state.rocket
  );

  readonly launchpad$: Observable<LaunchpadModel | null> = this.select(
    (state) => state.launchpad
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

  private readonly updateLaunch = this.updater(
    (state: LaunchesState, launch: LaunchModel) => {
      return {
        ...state,
        error: '',
        launch: launch,
      };
    }
  );

  private readonly updateRocket = this.updater(
    (state: LaunchesState, rocket: RocketModel) => {
      return {
        ...state,
        error: '',
        rocket,
      };
    }
  );

  private readonly updateLaunchpad = this.updater(
    (state: LaunchesState, launchpad: LaunchpadModel) => {
      return {
        ...state,
        error: '',
        launchpad,
      };
    }
  );

  readonly getRocket = this.effect((rocketId$: Observable<string>) => {
    return rocketId$.pipe(
      concatMap((rocketId: string) => {
        return this.launchHttpService.getRocket(rocketId).pipe(
          tapResponse(
            (rocket) => {
              this.updateRocket(rocket);
            },
            (e: string) => this.updateError(e)
          ),

          catchError(() => EMPTY)
        );
      })
    );
  });

  readonly getLaunchpad = this.effect((launchpadId$: Observable<string>) => {
    return launchpadId$.pipe(
      concatMap((launchpadId: string) => {
        return this.launchHttpService.getLaunchpad(launchpadId).pipe(
          tapResponse(
            (launchpad) => {
              this.updateLaunchpad(launchpad);
            },
            (e: string) => this.updateError(e)
          ),

          catchError(() => EMPTY)
        );
      })
    );
  });

  readonly getLaunch = this.effect((launchId$: Observable<string>) => {
    return launchId$.pipe(
      concatMap((launchId: string) => {
        return this.launchHttpService.getLounch(launchId).pipe(
          tapResponse(
            (launch) => {
              this.updateLaunch(launch);
            },
            (e: string) => this.updateError(e)
          ),

          catchError(() => EMPTY)
        );
      })
    );
  });

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

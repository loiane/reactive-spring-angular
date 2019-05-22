import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import { ProductService } from './../services/product.service';
import * as product from './product.actions';
import { CreateAction, UpdateAction } from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(private api: ProductService, private actions$: Actions) {}

  @Effect()
  loadAction$ = this.actions$
    .ofType<product.LoadAction>(product.ProductActions.LOAD)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .load()
          .pipe(
            map(res => new product.LoadSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  createAction$ = this.actions$
    .ofType<product.CreateAction>(product.ProductActions.CREATE)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .create(payload)
          .pipe(
            map(res => new product.CreateSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  updateAction$ = this.actions$
    .ofType<product.UpdateAction>(product.ProductActions.UPDATE)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .update(payload)
          .pipe(
            map(res => new product.UpdateSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  removeAction$ = this.actions$
    .ofType<product.RemoveAction>(product.ProductActions.REMOVE)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .remove(payload.id)
          .pipe(
            map(res => new product.RemoveSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  private handleError(error) {
    return of(new product.ErrorAction(error));
  }
}

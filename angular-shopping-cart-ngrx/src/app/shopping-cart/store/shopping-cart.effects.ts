import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import * as cart from './shopping-cart.actions';
import { AddToCartAction, SearchProductAction } from './shopping-cart.actions';

@Injectable()
export class ShoppingCartEffects {
  constructor(private actions$: Actions) {}

}

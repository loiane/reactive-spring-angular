import { NgRxAction } from '../../store/ngrx-action';
import { Product } from './../model/product';

export enum ProductActions {
  LOAD = '[Product] LOAD Requested',
  LOAD_SUCCESS = '[Product] LOAD Success',
  CREATE = '[Product] CREATE Requested',
  CREATE_SUCCESS = '[Product] CREATE Success',
  UPDATE = '[Product] UPDATE Requested',
  UPDATE_SUCCESS = '[Product] UPDATE Success',
  REMOVE = '[Product] REMOVE Requested',
  REMOVE_SUCCESS = '[Product] REMOVE Success',
  SEARCH_PRODUCT = '[Cart] SEARCH Requested',
  ERROR = '[Product] Error'
}

export class LoadAction extends NgRxAction<any> { type = ProductActions.LOAD; }
export class LoadSuccessAction extends NgRxAction<Product[]> { type = ProductActions.LOAD_SUCCESS; }

export class CreateAction extends NgRxAction<any> { type = ProductActions.CREATE; }
export class CreateSuccessAction extends NgRxAction<Product> { type = ProductActions.CREATE_SUCCESS; }

export class UpdateAction extends NgRxAction<Product> { type = ProductActions.UPDATE; }
export class UpdateSuccessAction extends NgRxAction<Product> { type = ProductActions.UPDATE_SUCCESS; }

export class RemoveAction extends NgRxAction<{id}> { type = ProductActions.REMOVE; }
export class RemoveSuccessAction extends NgRxAction<Product> { type = ProductActions.REMOVE_SUCCESS; }

export class SearchProductAction extends NgRxAction<any> { type = ProductActions.SEARCH_PRODUCT; }

export class ErrorAction extends NgRxAction<any> { type = ProductActions.ERROR; }

export type ProductAction =
  LoadAction | LoadSuccessAction |
  CreateAction | CreateSuccessAction |
  UpdateAction | UpdateSuccessAction |
  RemoveAction | RemoveSuccessAction |
  SearchProductAction | ErrorAction;



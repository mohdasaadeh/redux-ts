import { RepositoryActionTypes } from "../action-types";

export interface RepositorySearchAction {
  type: RepositoryActionTypes.REPOSITORY_SEARCH;
}

export interface RepositorySearchSuccessAction {
  type: RepositoryActionTypes.REPOSITORY_SEARCH_SUCCESS;
  payload: string[];
}

export interface RepositorySearchErrorAction {
  type: RepositoryActionTypes.REPOSITORY_SEARCH_ERROR;
  payload: string;
}

export type RepositoryAction =
  | RepositorySearchAction
  | RepositorySearchSuccessAction
  | RepositorySearchErrorAction;

import { RepositoryActionTypes } from "../action-types";
import {
  RepositorySearchAction,
  RepositorySearchSuccessAction,
  RepositorySearchErrorAction,
} from "../actions";

interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const repositoryReducer = (
  state: RepositoryState = { loading: false, error: null, data: [] },
  action:
    | RepositorySearchAction
    | RepositorySearchSuccessAction
    | RepositorySearchErrorAction
) => {
  switch (action.type) {
    case RepositoryActionTypes.REPOSITORY_SEARCH:
      return { loading: true, error: null, data: [] };
    case RepositoryActionTypes.REPOSITORY_SEARCH_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case RepositoryActionTypes.REPOSITORY_SEARCH_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repositoryReducer;

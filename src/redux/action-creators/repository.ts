import axios from "axios";
import { Dispatch } from "redux";

import { RepositoryAction } from "../actions";
import { RepositoryActionTypes } from "../action-types";

export const fetchRepositories =
  (term: string) => async (dispatch: Dispatch<RepositoryAction>) => {
    dispatch({ type: RepositoryActionTypes.REPOSITORY_SEARCH });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: RepositoryActionTypes.REPOSITORY_SEARCH_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: RepositoryActionTypes.REPOSITORY_SEARCH_ERROR,
        payload: error.message,
      });
    }
  };

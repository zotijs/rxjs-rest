import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, catchError, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { fetchUsersFulfilled } from "../actions";
import { FETCH_USERS, FETCH_USERS_REJECTED } from "../actions/types";

export default action$ =>
  action$.pipe(
    ofType(FETCH_USERS),
    mergeMap(() =>
      ajax.getJSON(`api/users`).pipe(
        map(response => fetchUsersFulfilled(response)),
        catchError(error =>
          of({
            type: FETCH_USERS_REJECTED,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, catchError, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { fetchUserFulfilled } from "../actions";
import { FETCH_USER, FETCH_USER_REJECTED } from "../actions/types";
//make it work with relative urls
export default action$ =>
  action$.pipe(
    ofType(FETCH_USER),
    mergeMap(action =>
      ajax.getJSON(`http://localhost:3000/api/users/${action.payload}`).pipe(
        map(response => fetchUserFulfilled(response)),
        catchError(error =>
          of({
            type: FETCH_USER_REJECTED,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

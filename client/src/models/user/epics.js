import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, catchError, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { fetchUser, fetchUserFulfilled, fetchUserRejected } from "./actions";

export default action$ =>
  action$.pipe(
    ofType(fetchUser.type),
    mergeMap(action =>
      ajax.getJSON(`http://localhost:3000/api/users/${action.payload}`).pipe(
        map(response => fetchUserFulfilled(response)),
        catchError(error =>
          of({
            type: fetchUserRejected.type,
            payload: error.xhr.response
          })
        )
      )
    )
  );

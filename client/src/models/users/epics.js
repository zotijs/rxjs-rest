import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, catchError, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { fetchUsers, fetchUsersFulfilled, fetchUsersRejected } from "./actions";

export default action$ =>
  action$.pipe(
    ofType(fetchUsers.type),
    mergeMap(() =>
      ajax.getJSON(`api/users`).pipe(
        map(response => fetchUsersFulfilled(response)),
        catchError(error =>
          of({
            type: fetchUsersRejected.type,
            payload: error.xhr.response
          })
        )
      )
    )
  );

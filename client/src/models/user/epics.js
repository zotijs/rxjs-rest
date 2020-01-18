import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, catchError, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  fetchUser,
  fetchUserFulfilled,
  fetchUserRejected,
  deleteUser,
  deleteUserFulfilled,
  deleteUserRejected
} from "./actions";

const fetchUserEpic = action$ =>
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

const deleteUserEpic = action$ =>
  action$.pipe(
    ofType(deleteUser.type),
    mergeMap(action =>
      ajax.delete(`http://localhost:3000/api/users/${action.payload}`).pipe(
        map(response => deleteUserFulfilled(action.payload)),
        catchError(error =>
          of({
            type: deleteUserRejected.type,
            payload: error.xhr.response
          })
        )
      )
    )
  );

export { fetchUserEpic, deleteUserEpic };

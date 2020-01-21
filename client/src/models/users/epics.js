import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, catchError, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  fetchUsers,
  fetchUsersFulfilled,
  fetchUsersRejected,
  deleteUser,
  deleteUserFulfilled,
  deleteUserRejected
} from "./actions";

const fetchUsersEpic = action$ =>
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

export { fetchUsersEpic, deleteUserEpic };

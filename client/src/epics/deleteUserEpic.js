import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, catchError, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { deleteUserFulfilled } from "../actions";
import { DELETE_USER, DELETE_USER_REJECTED } from "../actions/types";
//make it work with relative urls
export default action$ =>
  action$.pipe(
    ofType(DELETE_USER),
    mergeMap(action =>
      ajax.delete(`http://localhost:3000/api/users/${action.payload}`).pipe(
        map(response => deleteUserFulfilled(action.payload)),
        catchError(error =>
          of({
            type: DELETE_USER_REJECTED,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

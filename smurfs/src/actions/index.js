import axios from 'axios';

export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getSmurf = (dispatch) => {
  return dispatch => {
    dispatch({type: FETCHING});
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
        dispatch({type: FETCHED, payload:response.data});
    })
    .catch(err => {
      console.log(err);
        dispatch({type: ERROR});
    })
  }
}

export const createSmurf = smurf => {
  return {
    type: 'CREATE_SMURF',
    smurf: smurf
  }
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

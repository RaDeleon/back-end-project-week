import axios from 'axios';
export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const GET_ALL_NOTES_SUCCESS = 'GET_ALL_NOTES_SUCCESS';
export const GET_ALL_NOTES_FAILURE = 'GET_ALL_NOTES_FAILURE';

export const GET_NOTE = 'GET_NOTE';
export const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS';
export const GET_NOTE_FAILURE = 'GET_NOTE_FAILURE';

export const ADD_NOTE = 'ADD_NOTE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const UPDATE_NOTE = 'UPDATE_NOTE';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';

export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';


// const url = 'http://localhost:3333/api/notes';
const url = 'http://localhost:3333/api/notes';

// Heroku API
// const url = 'https://notes-api-ad.herokuapp.com/api/notes';


// GET request
export const getAllNotes = () => dispatch => {
  dispatch({ type: GET_ALL_NOTES });
  axios
    // .get('https://fe-notes.herokuapp.com/note/get/all')
    .get(url)
    .then(res => {
      dispatch({ type: GET_ALL_NOTES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_NOTES_FAILURE, payload: err });
    });
};

// GET request for single note
export const getNote = id => dispatch => {
  dispatch({ type: GET_NOTE });
  axios
    // updated to work with backend API heroku
    // .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .get(`${url}/${id}`)
    .then(res => {
      dispatch({ type: GET_NOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_NOTE_FAILURE, payload: err });
    });
};

// POST request
export const addNote = note => dispatch => {
  dispatch({ type: ADD_NOTE });
  axios
    // .post('https://fe-notes.herokuapp.com/note/create', note)
    .post(url, note)
    .then(res => {
      dispatch({
        type: ADD_NOTE_SUCCESS,
        payload: { ...note, _id: res.data.success }
        // payload: { ...note, id: res.data.success }
      });
    })
    .catch(err => dispatch({ type: ADD_NOTE_FAILURE, payload: err }));
};

// PUT request
export const updateNote = note => dispatch => {
  dispatch({ type: UPDATE_NOTE });
  axios
    // .put(`https://fe-notes.herokuapp.com/note/edit/${note._id}`, note)
    .put(`${url}/${note.id}`, note)
    .then(res => {
      dispatch({
        type: UPDATE_NOTE_SUCCESS,
        payload: { ...note }
      });
    })
    .catch(err => dispatch({ type: UPDATE_NOTE_FAILURE, payload: err }));
};

// DELETE request
export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_NOTE });
  axios
    // .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .delete(`${url}/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_NOTE_SUCCESS,
        payload: id
      });
    })
    .catch(err => dispatch({ type: DELETE_NOTE_FAILURE, payload: err }));
};

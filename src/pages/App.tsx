import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewNoteInput } from "../components/NewNoteInput";
import { NotesState } from '../redux/reducers/notesReducer';
import { addNote, removeNote } from '../redux/actions/actions';

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note:string) => {
    dispatch(addNote(note))
  }

  const onRemoveNote = (note:string) => {
    return () => {
      dispatch(removeNote(note))
    }
  }

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return (
            <>
            <li key={note}>{note}</li>
             <button onClick={onRemoveNote(note)}>remove</button>
          </>
          )
        })}
        <li>some notes</li>
      </ul>
    </>
  );
}

export default App;

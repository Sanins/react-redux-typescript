import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewNoteInput } from "./NewNoteInput";
import { NotesState } from './notesReducer';
import { addNote, removeNote } from './actions';
import { Navigation } from './Navigation';

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
      <Navigation />
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

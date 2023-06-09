import { useState, useEffect } from "react";
import { debounce } from "../../utils/helpers";
import { DateTime, NoteContainer, NoteTitle, NoteText, NoteWrapper } from "./Workspace.styled";

export const Workspace = ({ note, isEdit, updateNote, isActive }) => {
  const [noteArea, setNoteArea] = useState(note);

  const noteDate = new Date(noteArea.date).toString().slice(3, 15);
  const time = new Date(noteArea.date).toLocaleTimeString().slice(0, -3);

  useEffect(() => {
    setNoteArea(note);
  }, [note]);

  const onChange = (e, name) => {
    setNoteArea((prevState) => ({ ...prevState, [name]: e.target.value }));
    debounce(updateNote(noteArea), 250);
  };

  return (
    <NoteContainer>
      <NoteWrapper>
        {noteArea.date && (
          <DateTime>
            {noteDate} at {time}
          </DateTime>
        )}
        {isActive && (
          <>
            <NoteTitle
              name="title"
              value={noteArea.title}
              onChange={(e) => onChange(e, "title")}
              autoFocus
              readOnly={isEdit}
              maxLength="128"
              placeholder="Write some title here..."
            />
            <NoteText
              name="text"
              value={noteArea.text}
              onChange={(e) => onChange(e, "text")}
              readOnly={isEdit}
              placeholder="Write your note here..."
            />
          </>
        )}
      </NoteWrapper>
    </NoteContainer>
  );
};

import { useState, useEffect } from "react";
import { Toolsbar } from "../Toolsbar/Toolsbar.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import { Workspace } from "../Workspace/Workspace.jsx";
import { MainContainer } from "./App.styled.jsx";
import { createNew, deleteRecord, getAll, updateRecord } from "../../services/services.js";

function App() {
  const [notes, setNotes] = useState([]);
  const [oneNote, setOneNote] = useState({ date: "", title: "", text: "" });
  const [noteId, setNoteId] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [updated, setUpdated] = useState(false);
  const [isEdit, setIsEdit] = useState(true);

  useEffect(() => {
    getAll()
      .then(({ data }) => {
        setNotes(data.records);
      })
      .catch((err) => console.log(err));
    setUpdated(false);
  }, [updated]);

  const getId = (id) => {
    if (!id) return;
    setNoteId(id);

    const [note] = notes.filter((note) => note.id === id);
    const values = Object.values(note.values);

    setOneNote(() => ({
      date: values.length === 1 ? values[0] : values[1],
      title: values.length > 1 ? values[0] : "",
      text: values.length > 1 ? values[2] : "",
    }));
  };

  const addNote = () => {
    createNew();
    setUpdated(true);
  };

  const deleteNote = () => {
    deleteRecord(noteId);
    setUpdated(true);
    setNoteId("");
    setOneNote("");
    setDisabled(true);
  };

  const updateNote = (note) => {
    // updateRecord(noteId, note);
    // setUpdated(true);
    setIsEdit(false);
  };

  const shouldBtnDisabled = (boolean) => {
    setDisabled(boolean);
  };

  return (
    <div>
      <Toolsbar active={disabled} addNote={addNote} deleteNote={deleteNote} updateNote={updateNote} />
      <MainContainer>
        <Sidebar list={notes} getId={getId} shouldBtnDisabled={shouldBtnDisabled} />
        <Workspace note={oneNote} isEdit={isEdit} />
      </MainContainer>
    </div>
  );
}

export default App;

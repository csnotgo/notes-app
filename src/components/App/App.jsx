import { useState, useEffect } from "react";
import { Modal } from "../Modal/Modal.jsx";
import { ModalContent } from "../ModalContent/ModalContent.jsx";
import { Toolsbar } from "../Toolsbar/Toolsbar.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import { Workspace } from "../Workspace/Workspace.jsx";
import { MainContainer } from "./App.styled.jsx";
import { createNew, deleteRecord, getAll, searchByQuery, updateRecord } from "../../services/services.js";

function App() {
  const [notes, setNotes] = useState([]);
  const [oneNote, setOneNote] = useState({ date: "", title: "", text: "" });
  const [noteId, setNoteId] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [updated, setUpdated] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAll()
      .then(({ data }) => {
        setNotes(data.records);
      })
      .catch((err) => console.log(err));
    setUpdated(false);
  }, [updated]);

  const onFilteredNotes = async (searchQuery) => {
    try {
      if (searchQuery === "") {
        setUpdated(true);
        return;
      }

      const { data } = await searchByQuery(searchQuery);
      setNotes(data.records);
    } catch (error) {
      console.log(error);
    }
  };

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

  const onItemClick = (boolean) => {
    setIsActive(boolean);
  };

  const addNote = async () => {
    try {
      await createNew();
      setUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deleteNote = async () => {
    try {
      await deleteRecord(noteId);
      handleOpenModal();
      setUpdated(true);

      setIsEdit(true);
      setIsActive(false);
      setDisabled(true);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (note) => {
    try {
      await updateRecord(noteId, note);
      setUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const canEditNote = () => {
    setIsEdit(false);
  };

  const shouldBtnDisabled = (boolean) => {
    setDisabled(boolean);
    setIsEdit(true);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={handleOpenModal}>
          <ModalContent onClose={handleOpenModal} action={deleteNote} text="Do you want delete this note?" />
        </Modal>
      )}
      <Toolsbar
        active={disabled}
        addNote={addNote}
        openModal={handleOpenModal}
        canEditNote={canEditNote}
        searchQuery={onFilteredNotes}
      />
      <MainContainer>
        <Sidebar list={notes} getId={getId} shouldBtnDisabled={shouldBtnDisabled} onItemClick={onItemClick} />
        <Workspace note={oneNote} isEdit={isEdit} updateNote={updateNote} isActive={isActive} />
      </MainContainer>
    </div>
  );
}

export default App;

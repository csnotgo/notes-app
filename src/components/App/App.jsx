import { Toolsbar } from "../Toolsbar/Toolsbar.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import { Workspace } from "../Workspace/Workspace";
import { MainContainer } from "./App.styled.jsx";
import { useEffect } from "react";
import { fetchAll } from "../../services/services.js";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchAll().then(({ data }) => setNotes(data.records));
  }, []);

  return (
    <div>
      <Toolsbar />
      <MainContainer>
        <Sidebar list={notes} />
        <Workspace />
      </MainContainer>
    </div>
  );
}

export default App;

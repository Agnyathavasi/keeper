import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note.jsx";
import Footer from "./Footer";
import FaB from "./floatingButton";
import "../css/app.css"

function App() {
  const [notes, setNotes] = useState([]);

  function addNewItem(not) {
    setNotes((preValue) => {
      return [...preValue, not];
    });
  }

  function deleteItem(id) {
    setNotes((preValue) => {
      return preValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  const custonmStyle = {
    position: "absolute",
    top: "50%",
    width: "100%",
    textAlign: "center",
    fontWeight: "400",
    "font-family": "'Roboto', sans-serif",
  };

  return (
    <div className="app">
      <Header />
      {notes.length === 0 ? (
        <h2 style={custonmStyle}>Add a note to get Started.</h2>
      ) : (
        ""
      )}
      <div className="notesSection">
        {notes.map((note, index) => {
          return (
            <Note
              id={index}
              title={note.title}
              content={note.content}
              key={note.key}
              onDelete={deleteItem}
            />
          );
        })}
      </div>
      <Footer />
      <FaB onAdd={addNewItem} />
    </div>
  );
}

export default App;

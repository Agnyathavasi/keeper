import React from "react";

function Note(items) {

  function handleClick (){
    items.onDelete(items.id)
  }

  return (
    <div className="note">
      <h1 className="title">{ items.title }</h1>
      <p className="content">{ items.content }</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;

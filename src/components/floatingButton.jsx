import React, { useState } from "react";
import "../css/FAB.css";
import "bootstrap"

function FaB(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function clicked(){
    props.onAdd(note)
    document.getElementById('titleofNote').value = ""
    document.getElementById('contentofNote').value = ""
  }

  function handleChange(event){
    const {name, value} = event.target

    setNote(preValue => {
      return{
        ...preValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <button
        type="button"
        className="fab"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
        </svg>
      </button>

      <div
        class="modal hide fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new Item
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                name="title"
                onChange={handleChange}
                placeholder="Title"
                id="titleofNote"
              />
              <textarea
                name="content"
                onChange={handleChange}
                placeholder="Take a note..."
                rows="3"
                id="contentofNote"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={clicked}
                data-dismiss="modal"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaB;

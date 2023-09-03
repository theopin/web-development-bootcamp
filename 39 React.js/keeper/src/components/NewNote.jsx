import React from "react";

function NewNote(props) {
    return (
    <form onSubmit={props.onNewNote} >
        <input
          name="title"
          // onChange={handleChange}
          placeholder="Title"
        />
        <input
          name="content"
          // onChange={handleChange}
          placeholder="Take a note..."
        />
        <button type="submit" >Add Note</button>
    </form>)
}

export default NewNote;
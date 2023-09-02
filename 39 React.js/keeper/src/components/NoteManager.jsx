import React from "react";
import Note from "./Note";

function NoteManager(props) {
    console.log(props)

    return props.notes.map(element => <Note key={element.key} title={element.title} content={element.content}/>)

}

export default NoteManager;
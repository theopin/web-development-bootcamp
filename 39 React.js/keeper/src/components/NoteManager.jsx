import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";
import notes from "../notes";

function NoteManager(props) {
    const [inputText, setInputText] = React.useState("");
    const [noteList, setNoteList] = React.useState(notes)

    function addNote(event) {
        event.preventDefault()

        const myFormData = new FormData(event.target);
        const formDataObj = {};
        myFormData.forEach((value, key) => (formDataObj[key] = value));
        formDataObj["key"] = noteList.length + 1
        formDataObj["id"] = noteList.length + 1

        setNoteList(prevItems => {
            return [...prevItems, formDataObj];
          });
        


    }

    function deleteItem(event) {
        console.log(event.target.id)
        setNoteList(prevItems => {
          return prevItems.filter((item, index) => {
            console.log(item.id, event.target   )
            return item.id !== parseInt(event.target.id);
          });
        });
        event.persist()

      }


    return(

        <div>
            <NewNote onNewNote={addNote} inputText={inputText}/>
            {noteList.map(element => <Note key={element.key} id={element.id} title={element.title} content={element.content} deleteItem={deleteItem}/>)}
        </div>
    ) 
    
    

}

export default NoteManager;
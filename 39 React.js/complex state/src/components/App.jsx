import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    // name: set name of input div

    // use prevValue to access element before updated
    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { value, name } = event.target;
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    setContact(formDataObj);

    // name: set name of input div
    console.log(event.target);
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          // onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="lName"
          // onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          name="email"
          // onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

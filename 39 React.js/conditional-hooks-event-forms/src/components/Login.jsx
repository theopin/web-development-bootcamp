import React from "react";
import Input from "./Input";

function Login() {
  const [headingText, setHeadingText] = React.useState("Login");
  const [isMouseOver, setMouseState] = React.useState(false);
  const [name, setName] = React.useState();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setHeadingText("Logged In");
    console.log(username);
    setName(username);
  }

  function setColor() {
    setMouseState(true);
  }

  function restoreColor() {
    setMouseState(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        {headingText} {name}
      </div>
      <Input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={setColor}
        onMouseOut={restoreColor}
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default Login;

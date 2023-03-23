import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    const data = { name, email };
    if (name && email) {
      setList((list) => [...list, data]);
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="App">
      <h1>React</h1>
      <p>Store input value in array using Map</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            email="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>

      {list.map((a) => (
        <div>
          <ol>
            <strong>Name- </strong>
            {a.name}
          </ol>
          <ol>
            <strong>Email- </strong> {a.email}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default App;

import { useState } from "react";

function UserForm({ onUserAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUserAdd({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={onNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={onEmailChange} />
        </div>
        <button>Add User</button>
      </form>
    </>
  );
}

export default UserForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { toast } from "react-toastify";
export function Register() {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");
  const [field, setField] = useState({});

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyField = {};
    if (!username.trim()) {
      emptyField.username = "Username must not be empty!";
    }
    if (!mail.trim()) {
      emptyField.mail = "Email must not be empty!";
    }
    if (!password.trim()) {
      emptyField.password = "Password must not be empty";
    } else if (password.trim().length < 6) {
      emptyField.password = "Minimum 6 characters in password";
    }
    if (conPass !== password) {
      emptyField.conPass = "Passwords do not match";
    }

    setField(emptyField);
    if (Object.keys(emptyField).length === 0) {
      localStorage.setItem(
        "regiData",
        JSON.stringify({ username, mail, password, conPass })
      );
      navigate("/login");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <p className="subtitle">Let's create new account</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            placeholder="username :"
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            className={field.username ? "error-input" : ""}
          />
          {field.username && <p className="error">{field.username}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            placeholder="email :"
            type="email"
            id="email"
            name="email"
            onChange={(e) => setMail(e.target.value)}
            className={field.mail ? "error-input" : ""}
          />
          {field.mail && <p className="error">{field.mail}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="password :"
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className={field.password ? "error-input" : ""}
          />
          {field.password && <p className="error">{field.password}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => setConPass(e.target.value)}
            className={field.conPass ? "error-input" : ""}
          />
          {field.conPass && <p className="error">{field.conPass}</p>}
        </div>

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
}

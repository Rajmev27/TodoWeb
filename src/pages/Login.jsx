import { useState } from "react";
import "./login.css";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Login() {
  // const Data = JSON.parse(localStorage.getItem("userData")) || [];
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [field, setfield] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyField = {};

    if (!mail.trim()) {
      emptyField.mail = "Email must not be empty!";
    }
    if (!password.trim()) {
      emptyField.password = "Password must not be empty";
    } else if (password.trim().length < 6) {
      emptyField.password = "Minimum 6 characters in password";
    }

    setfield(emptyField);

    if (Object.keys(emptyField).length === 0) {
      localStorage.setItem("userData", JSON.stringify({ mail, password }));
      // navigate("/");
    }
    const sameData = localStorage.getItem("regiData");
    if (sameData) {
      const parsedData = JSON.parse(sameData);
      if (mail === parsedData.mail && password === parsedData.password)
        navigate("/");
    } else {
      setfield({
        mail: "Invalid Email",
        password: "Invalid Password",
      });
    }
    toast.success("Login Successfully");
  };

  return (
    <div className="Login-box">
      <h2>LOGIN</h2>
      <p>Welcome Back</p>
      <form className="form" action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          onChange={(e) => setMail(e.target.value)}
          className={field.mail ? "error-input" : ""}
        />
        <br />
        {field.mail && <p className="error">{field.mail}</p>}

        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className={field.mail ? "error-input" : ""}
        />
        <br />
        {field.password && <p className="error">{field.password}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

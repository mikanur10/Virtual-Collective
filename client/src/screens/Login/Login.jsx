import React, { useState } from "react";
import './Login.css'
import { Redirect } from "react-router-dom";
import UniversalLayout from "../../components/shared/UniversalLayout/UniversalLayout";
import { login } from "../../services/users";

function SignUp({ user, handleSetUser }) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(userInfo);
    handleSetUser(user);
  };

  if (user) {
    return <Redirect to={`/`} />;
  }

  return (
    <UniversalLayout>
      <div id="form-div">
        <form className="sign-create-form" onSubmit={handleSubmit}>
          <input
            className="input-username"
            placeholder="Username"
            value={userInfo.username}
            onChange={handleChange}
            name="username"
            required
            autoFocus
          />
          <input
            className="input-password"
            onChange={handleChange}
            type='password'
            placeholder="Password"
            value={userInfo.password}
            name="password"
            required
          />
          <button type="submit" id="submit-button">
            Login
          </button>
        </form>
      </div>
    </UniversalLayout>
  );
}

export default SignUp;

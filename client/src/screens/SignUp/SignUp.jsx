import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import UniversalLayout from "../../components/shared/UniversalLayout/UniversalLayout";
import { createUser } from "../../services/users";
import App from "../../App";

function SignUp({ users, setUsers }) {
  const [isCreated, setCreated] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
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
    if (userInfo.password === userInfo.passwordConfirm) {
      const created = await createUser(userInfo);
      console.log(created);
      setCreated({ created });
    }
  };

  if (isCreated) {
    return <Redirect to={`/login`} />;
  }

  return (
    <UniversalLayout>
      <div>
        <form className="sign-create-form" onSubmit={(e) => handleSubmit(e)}>
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
            type="email"
            className="input-email"
            onChange={handleChange}
            placeholder="Email"
            value={userInfo.email}
            name="email"
          />
          <input
            className="input-password"
            onChange={handleChange}
            placeholder="Password"
            value={userInfo.password}
            name="password"
            required
          />
          <input
            className="input-passwordConfirm"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={userInfo.passwordConfirm}
            name="passwordConfirm"
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </UniversalLayout>
  );
}

export default SignUp;

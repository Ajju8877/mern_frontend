import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

export default function Signup() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  });

  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration successful");
      console.log("Registration successful");

      history.push("/signin");
    }
  };

  return (
    <Container>
      <h1> Sign up </h1>
      <FormCover>
        <form method="POST">
          <div>
            <label> Name </label> <br />
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInput}
            />
          </div>
          <div>
            <label> Email </label> <br />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <label> Phone </label> <br />
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
          <div>
            <label> Work </label> <br />
            <input
              type="text"
              name="work"
              id="work"
              autoComplete="off"
              value={user.work}
              onChange={handleInput}
            />
          </div>
          <div>
            <label> Password </label> <br />
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <div>
            <label> Confirm Password </label> <br />
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              autoComplete="off"
              value={user.cpassword}
              onChange={handleInput}
            />
          </div>
          <div>
            <input type="submit" onClick={PostData} />
          </div>
        </form>
      </FormCover>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
const FormCover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  form {
    padding-bottom: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    div {
      margin-top: 20px;
    }
    input {
      width: 220px;
      padding: 6px;
    }
    input[type="submit"] {
      width: 200px;
      padding: 6px;
      background-color: orange;
      border: none;
      outline: none;
      box-shadow: 0px 0.5px 3px 1px;
    }
  }
`;

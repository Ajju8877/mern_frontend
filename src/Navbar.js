import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return <Container>Navbar</Container>;
}

const Container = styled.div`
  background-color: black;
  color: #fff;
  padding: 10px;
  text-align: center;
  ul {
    display: flex;
    margin-left: auto;
  }
  li {
    list-style: none;
    margin-right: 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;

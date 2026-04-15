import styled from "styled-components";

export const Button = styled.button`
  /* height: 44px; */
  padding: 10px 18px;
  background: #000;
  border-radius: 5px;
  color: white;
  min-width: 220px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
background-color: white;
    border: 1px solid black;
    color: #000;

  &:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
    transition: 0.3s background ease-in;
  }
`;

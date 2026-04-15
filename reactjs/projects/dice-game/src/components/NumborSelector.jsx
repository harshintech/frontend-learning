import { useState } from "react";
import { jsx } from "react/jsx-runtime";
import styled from "styled-components";

const NumborSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className="errormsg">
        {error}
      </p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            key={i}
            onClick={() => numberSelectorHandler(value)}
            $isSelected={value === selectedNumber} //--> here we pass props
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumborSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }

  .errormsg{
    color:red;
    font-size:20px;
    font-weight: normal;
    margin-bottom: 10px;
    margin: 10px auto;
  }
  @media (max-width: 768px) {
    p {
      font-size: 16px;
      font-weight: 700;
    }

    .flex{
      gap:10px
    }

    .errormsg{
      font-size: 15px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.$isSelected ? "black" : "white")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};

  @media (max-width: 768px) {
    height: 45px;
    width: 45px;
  }
`;

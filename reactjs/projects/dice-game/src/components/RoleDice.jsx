import { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice_img" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  justify-content: center;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    img{
      width: 200px;
    }
  }
`;

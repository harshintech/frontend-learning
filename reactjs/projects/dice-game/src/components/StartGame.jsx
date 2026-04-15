import styled from "styled-components";
import { Button } from "../styled/Button";


const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src="/images/dices.png" alt="" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 90vh;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  gap: 100px;
  align-items: center;
  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
     gap: 20px;

    img{
      width: 250px;
    }

    .content{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .content h1 {
    font-size: 50px;
    white-space: nowrap;
  }
  }
`;



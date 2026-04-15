import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  height: 200px;
  max-width: 200px;
  text-align: center;
  background-color: #d5d5d5;
  display: flex;
  flex-direction: column;
  padding: 22px;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
  @media (max-width: 768px) {
    height: 50px;
    max-width: 350px;
    display: flex;
    gap:20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding:32px 50px;
    margin-bottom: 12px;
    
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

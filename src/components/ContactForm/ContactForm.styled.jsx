import styled from "styled-components";

export const Div = styled.div`
  border-radius: 8px;
  border: 1px solid #121214;
  box-shadow: 0 0 10px rgba(235, 227, 227, 0.1);
  padding: 20px;
  background-color: #e0d3d3f8;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
`;

export const ContForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  gap: 20px;
  border-radius: 6px;
  border: 1px solid #121214;
  box-shadow: 0 0 10px rgba(235, 227, 227, 0.1);
  padding: 20px 40px;
  background-color: white;

  @media (max-width: 768px) {
    max-width: 300px;
  }
  @media (max-width: 428px) {
    max-width: 200px;
  }
`;

export const ContLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;

export const ContInput = styled.input`
  border-radius: 6px;
  width: 300px;
  height: 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 200px;
  }
  @media (max-width: 428px) {
    max-width: 100px;
  }
`;
export const AddButton = styled.button`
  border-radius: 6px;
  align-items: center;
  border: 0;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  background-color: grey;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 16px;
  justify-content: center;
  line-height: 1em;
  max-width: 100px;
  min-width: 80px;
  padding: 6px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin: 0 auto;

  &:active,
  &:hover {
    outline: 0;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  }
`;

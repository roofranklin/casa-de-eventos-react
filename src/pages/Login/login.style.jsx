import styled from 'styled-components';
export const Container = styled.div`
width: 1140px;
height: calc(100vh - 240px);
display: block;
margin: auto;
`;

export const Title = styled.h1`
  text-align: center;
  color: #000;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #45a049;
  }
`;

export const erro = styled.p`
  color: red;
  margin-top: 10px;
  text-align: center;
`;


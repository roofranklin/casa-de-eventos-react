import styled from "styled-components";

export const Container = styled.div`
    width: 1140px;
    height: calc(100vh - 240px);
    display: block;
    margin: auto;
`
export const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    padding-top: 58px;
    font-size: 36px;
    font-weight: 400;
    color: #1F0049;
`

export const ContatoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65vh; 
    background-color: #E2D8A5;
`;

export const FormContainer = styled.div`
    width: 400px;
    background-color: #fff  ;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormItem = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100px;
  resize: none;
`;

export const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

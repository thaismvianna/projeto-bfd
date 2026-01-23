import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #FAE8FA;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

export const FormBox = styled.div`
  background-color: #e0b4f4a1;
  padding: 40px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 6px 16px #00000019;
`;

export const Title = styled.h1`
  color: #9400D3;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 10px;
  color: #333;
  font-size: 1.1rem;
`;

export const Form = styled.div`
  margin-top: 30px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 14px;
  font-size: 1rem;
  margin-bottom: 15px;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: #9400D3;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 15px;
  
  &:focus {
    outline: none;
    border-color: #9400D3;
  }
`;

export const Button = styled.button`
  background-color: #9400D3;
  color: white;
  border: none;
  padding: 15px;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: #7a00b3;
  }
`;
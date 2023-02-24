import styled from "styled-components";
export const DivBodyRegister = styled.div`
  width: 100vw;

  min-height: 150vh;

  background-color: #000000;
`;
export const ContainerRegister = styled.div`
  width: 370px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: white;
  padding: 20px 22px;
  padding-top: 42px;
  gap: 22px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 28px;
  }
  span {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #868e96;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15.182px;
    line-height: 0px;
    color: #f8f9fa;
    text-align: right;
    display: flex;
    justify-content: start;
    margin-bottom: 10px;
  }
  input {
    width: 329px;
    height: 42px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    color: #868e96;
  }
  select {
    width: 330px;
    height: 42px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    color: #868e96;
  }
  section {
    margin-top: 18px;
  }
  p {
    color: #e83f5b;
    margin-top: 4px;
    display: flex;
    justify-content: start;
  }
`;

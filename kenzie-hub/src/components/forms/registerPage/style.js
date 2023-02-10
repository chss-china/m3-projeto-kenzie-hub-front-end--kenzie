import styled from "styled-components";
export const DivBodyRegister = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #000000;
`;
export const ContainerRegister = styled.div`
  width: 370px;
  height: 800px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: white;
  padding: 42px 22px;
  gap: 22px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 28px;
  }
  span {
    font-family: "Inter";
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
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15.182px;
    line-height: 0px;
    color: #f8f9fa;
    text-align: right;
    justify-content: start;
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
    width: 340px;
    height: 42px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    color: #868e96;
  }
  section {
    margin-top: 18px;
  }
`;

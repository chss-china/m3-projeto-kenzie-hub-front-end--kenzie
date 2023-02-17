import styled from "styled-components";
export const DivContainerModalEdit = styled.div`
  width: 500px;
  min-height: 480px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  position: absolute;
  top: 170px;
  @media (max-width: 1000px) {
    width: 370px;
    min-height: 370.34px;
  }
  @media (max-width: 400px) {
    width: 100%;
    max-width: 100%;
  }

  div {
    width: 100%;
    height: 100%;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    padding: 7px;
    display: flex;
    align-items: center;
  }
  h1 {
    margin-bottom: 20px;
    margin-left: 20px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #f8f9fa;
    @media (max-width: 1000px) {
      font-size: 18.1924px;
    }
  }
  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #868e96;
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 0px;
    color: #f8f9fa;
    margin-top: 30px;
    margin-right: 20px;
    @media (max-width: 1000px) {
      margin-left: 0px;
      font-size: 16px;
    }
  }
  p {
    color: #e83f5b;
    font-family: "Inter", sans-serif;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    @media (max-width: 1000px) {
      margin-top: 0px;
    }
  }
  input {
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 329.93px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    margin-left: 70px;
    font-family: "Inter", sans-serif;
    @media (max-width: 1000px) {
      margin-left: 40px;
      width: 300.66px;
      height: 40.5px;
    }
  }
  select {
    margin-top: 20px;
    padding: 0px 16.2426px;
    gap: 10.15px;
    margin-left: 70px;
    width: 329.93px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: #ffff;
    margin-bottom: 20px;
    font-family: "Inter", sans-serif;
    @media (max-width: 1000px) {
      margin-left: 40px;
      width: 300.66px;
      height: 40.5px;
    }
  }
  button {
    padding: 0px 22.3336px;
    gap: 10.15px;
    width: 204px;
    height: 48px;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    margin-left: -25px;
    margin-right: 30px;
    font-family: "Inter", sans-serif;
    @media (max-width: 1000px) {
      margin-left: 10px;
      margin-right: 10px;
      width: 190px;
    }
  }
  section {
    display: flex;
    align-items: center;
    @media (max-width: 1080px) {
      flex-direction: row;
    }
  }
`;

export const DivRemove = styled.section`
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 98px;
  height: 48px;
  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;

  span {
    color: #ffff;
  }
`;

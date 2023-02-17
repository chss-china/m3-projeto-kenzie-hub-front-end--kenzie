import styled from "styled-components";
export const DivBodyDashboard = styled.div`
  height: 200vh;
  background-color: #000000;
`;
export const DivContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  background: #000000;
  margin-top: 30px;
  display: flex;
  position: relative;
  @media (max-width: 1070px) {
    width: 100%;
    height: 100%;
  }
  section {
    display: flex;
    align-items: center;
    margin: 0 auto;
    @media (max-width: 1070px) {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }
  }
  h1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #f8f9fa;
    margin: 0 auto;
    margin-top: 30px;
  }
  @media (max-width: 1000px) {
    margin-right: 0px;
    margin-left: 15px;
    margin: 0 auto;
  }

  h2 {
    color: white;
  }
`;

export const PModule = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #868e96;
  padding-left: 300px;
  margin: 0 auto;
  margin-top: 30px;
  @media (max-width: 1300px) {
    padding-left: 0px;
    flex-direction: row;
  }
`;
export const SectionDeveloping = styled.div`
  margin: 0 auto;
  margin-right: 480px;
  text-align: justify;
  @media (max-width: 1070px) {
    max-width: 100%;
    margin-left: 200px;
  }
  @media (max-width: 570px) {
    margin-left: 500px;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 60px;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #f8f9fa;
    margin: 0 auto;
    text-align: justify;
    padding-right: 500px;
    padding-left: 240px;
    justify-content: space-between;
    @media (max-width: 1070px) {
      margin: 0 auto;
      padding: 0px;
      margin-left: 260px;
    }
    @media (max-width: 550px) {
      margin-left: 0px;
    }
  }
  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: #f8f9fa;
    text-align: justify;
  }
  button {
    background: #212529;
    border-radius: 4px;
    width: 34px;
    height: 32px;
    color: #ffffff;
    margin-left: 130px;
    justify-content: space-between;
    @media (max-width: 1070px) {
      margin: 0 auto;
      margin-left: 0px;
    }
  }
  article {
    justify-content: space-between;
    padding: 35px;
    width: 900px;
    background: #212529;
    border-radius: 4px;
    margin-left: 300px;
    margin-top: 45px;
    @media (max-width: 1300px) {
      width: 100%;
      margin-left: 150px;
    }
    @media (max-width: 570px) {
      margin-left: 0;
      margin: 0 auto;
      max-width: 100%;
      width: 100%;
    }
  }
`;
export const H1Name = styled.h4`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #f8f9fa;
  margin: 0 auto;
  margin-top: 30px;
  margin-left: -10px;
  margin-right: 60px;
  @media (max-width: 1000px) {
    margin-right: 0px;
    margin-left: 0;

    margin-top: 30px;
  }
`;

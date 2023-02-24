import styled from "styled-components";
import { Link } from "react-router-dom";
export const DivBodyLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
`;
export const ContainerLogin = styled.div`
  width: 369px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px 22px;
  padding-top: 40px;
  gap: 22px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 28px;
    color: #f8f9fa;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
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
    margin-bottom: 4px;
    margin-top: 12px;
  }
  input {
    width: 329px;
    height: 42px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    color: #868e96;
    margin-top: 10px;
    margin-bottom: 18px;
  }
  span {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #868e96;
  }
  p {
    color: #e83f5b;
    display: flex;
    justify-content: start;
    margin-top: -15px;
  }
`;
export const SectionSpanButton = styled.section`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 40px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #868e96;
    margin-bottom: 20px;
  }
  Link {
    width: 324px;
    height: 48px;
    left: 0px;
    top: 0px;
    background: #868e96;
    border: 1.2182px solid #868e96;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
  }
`;
export const NavLink = styled.div`
  width: 324px;
  height: 48px;
  left: 0px;
  top: 0px;
  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  a {
    text-decoration: none;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #f8f9fa;
  }
`;

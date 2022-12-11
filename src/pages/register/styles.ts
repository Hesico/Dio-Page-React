import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 8%;
`;

export const Column = styled.div`
    width: 368px;
`;

export const Row = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    `;

export const TitleText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 90%;
  margin-bottom: 20px;
  line-height: 44px;
  color: #ffffff;
`;

export const Text = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 368px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #fff;
`;

export const FormContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 20px 0;
`;

export const VariantText = styled.p`
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;

    a {
        color: #23DD7A;
    }

`;